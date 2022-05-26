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
import Api from '../../module/api';
import { NftSwapV4 } from '@traderxyz/nft-swap-sdk';
import { useWallet } from 'use-wallet';
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


function SellOrder({nftImg, nftId, order, nprice, orderHandler}) {
	const classes = useStyles();
  
  const API = new Api();
  const [open, setOpen] = React.useState(false);
  const [isPending, setIsPending] = useState(false);
  const [swapSdk, setSwapSdk] = useState(null);
  const { account, connect, reset, ethereum } = useWallet();
  const fillInfo = {
    tokenAddress: Contracts.testnet.ftoken,
    amount: API.toBigNum(nprice, 18).toString(),
    type: 'ERC20'
  };

  const handleClickBuy = () => {
    setOpen(true);
  };

  const handleClickOrderBuy = async () => {
    setIsPending(true);
    const approvalStatus = await swapSdk.loadApprovalStatus(
      fillInfo,
      account
    );

    if (!approvalStatus.contractApproved) {
      const approvalTx = await swapSdk.approveTokenOrNftByAsset(
        fillInfo,
        account
      );

      const approvalTxReceipt = await approvalTx.wait();
    }

    const fillTx = await swapSdk.fillSignedOrder(order);
    const fillTxReceipt = await swapSdk.awaitTransactionHash(fillTx.hash);

    const res = await API.removeOrder({
      tokenId: nftId
    });

    setTimeout(() => {
      orderHandler();
      setIsPending(false);
      alert('order completed!');
      setOpen(false);
    }, 15000);
  }

  const handleClose = () => {
    setOpen(false);
  };

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
      <Grid item md={12} className={classes.imageWrapper} justifyContent="center">
        <img className={classes.cardImg} alt="nft" src={nftImg} />
      </Grid>
      <Grid item md={12} className={classes.idWrapper} justifyContent="center">
        <span>Token ID: {nftId}</span>
      </Grid>
      <Grid item md={12} className={classes.buttonWrapper} justifyContent="center">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={handleClickBuy}
          >
          BUY
        </Button>
      </Grid>
      <Dialog open={open}>
        <LoadingOverlay
          active={isPending}
          spinner
          text='Please wait...'
          >
          <DialogTitle>Buying NFT</DialogTitle>
          <DialogContent>
            <DialogContentText>
              The price for this NFT is {nprice}.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickOrderBuy}>Buy</Button>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </LoadingOverlay>
      </Dialog>
    </Grid>
  )
}

export default SellOrder;