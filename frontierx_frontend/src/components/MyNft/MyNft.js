import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import nft from '../../images/nft.png';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useWallet } from 'use-wallet';
import { NftSwapV4 } from '@traderxyz/nft-swap-sdk';
import Api from '../../module/api';
import {ethers} from 'ethers';
import Contracts from '../../config/contracts.json';
import LoadingOverlay from 'react-loading-overlay';

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    width: 200,
    height: 200
  },
  imageWrapper: {
    height: 130,
    textAlign: 'center'
  },
  idWrapper: {
    height: 20,
    textAlign: 'center'
  },
  button: {
    width: 100,
  },
  buttonWrapper: {
    padding: 10,
    textAlign: 'center'
  },
  cardImg: {
    height: '100%'
  }
}));


function MyNft({nftImg, nftId, nprice, updatePrice}) {
  const classes = useStyles();
  
  const API = new Api();
  const { account, connect, reset, ethereum } = useWallet();
  const [open, setOpen] = React.useState(false);
  const [price, setPrice] = React.useState(0);
  const [swapSdk, setSwapSdk] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [orderInfo, setOrderInfo] = useState({
    tokenAddress: Contracts.testnet.fnft,
    tokenId: `${nftId}`,
    type: 'ERC721'
  });

  
  const [fillInfo, setFillInfo] = useState({
    tokenAddress: Contracts.testnet.ftoken,
    amount: 0,
    type: 'ERC20'
  });

  const handleClickSell = async () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlePrice = (event) => {
    setPrice(Number(event.target.value).toFixed(0));
  }

  const handleMakeOrder = async () => {
    if (price < 0) {
      alert('Price must be a positive value.');
      return;
    } 
    setIsPending(true);
    const approvalStatus = await swapSdk.loadApprovalStatus(
      orderInfo,
      account
    );

    if (!approvalStatus.contractApproved) {
      const approvalTx = await swapSdk.approveTokenOrNftByAsset(
        orderInfo,
        account
      );

      const approvalTxReceipt = await approvalTx.wait();
    }

    let _fillInfo = fillInfo;
    _fillInfo.amount = API.toBigNum(price, 18).toString();
    setFillInfo(_fillInfo);
    const order = swapSdk.buildOrder(
      orderInfo,
      _fillInfo,
      account
    );

    const singedOrder = await swapSdk.signOrder(order);
    console.log(singedOrder);

    const res = await API.makeSellOrder({
      maker: account,
      price: price,
      img: nftImg,
      tokenId: nftId,
      makerSignature: JSON.stringify(singedOrder)
    });
    updatePrice(nftId, price);
    
    setIsPending(false);
    alert('order created!')
    setOpen(false);
  }

  useEffect(() => {
    if (account && ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const nftSwapSdk = new NftSwapV4(provider, signer, Number(ethereum.chainId));
      setSwapSdk(nftSwapSdk);
    }
  }, [account, ethereum])

  return (
    <Grid container className={classes.cardWrapper}>
      <Grid item md={12} className={classes.imageWrapper}>
        <img className={classes.cardImg} alt="nft" src={nftImg} />
      </Grid>
      <Grid item md={12} className={classes.idWrapper}>
        <span>Token ID: {nftId}</span>
      </Grid>
      <Grid item md={12} className={classes.buttonWrapper}>
        {
          nprice == 0 ?
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={handleClickSell}
              >
              SELL
            </Button>
          :
            <span>Sell for {nprice}</span>
        }
      </Grid>
      <Dialog open={open}>
        <LoadingOverlay
          active={isPending}
          spinner
          text='Please wait...'
          >
          <DialogTitle>Selling NFT</DialogTitle>
          <DialogContent>
              <DialogContentText>
                Please enter the price you wannt to sell for.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                value={price}
                onChange={handlePrice}
                label="Price"
                type="number"
                fullWidth
                variant="standard"
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleMakeOrder}>Make order</Button>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </LoadingOverlay>
      </Dialog>
    </Grid>
  )
}

export default MyNft;