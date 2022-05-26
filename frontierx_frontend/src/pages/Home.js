import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { useWallet } from "use-wallet";
import Grid from "@mui/material/Grid";
import SellOrder from '../components/SellOrder/SellOrder';
import MyNft from '../components/MyNft/MyNft';
import { gql } from '@apollo/client';
import Blockchain from "../module/blockchain";
import Api from '../module/api';
import { apolloClient } from '..';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    margin: 50
  }
}));


function Home() {
  const classes = useStyles();
  const { account, connect, reset, ethereum } = useWallet();
  const [pending, setPending] = useState(false);
	const [blockchain, setBlockchain] = useState(null);
  const [myNfts, setMyNfts] = useState([]);
  const [sellNfts, setSellNfts] = useState([]);
  const API = new Api();

  const GET_NFTS = gql`
    query Accounts($account: String!) {
      accounts(where: {id: $account}) {
        id
        nfts {
          id
        }
      }
    }
  `;

  const updatePrice = (nftId, price) => {
    let _myNfts = [...myNfts];
    for (const myNft of _myNfts) {
      if (myNft.id === nftId) myNft.price = API.toHuman(API.toBigNum(price, 18), 18).toFixed(0);
    }

    setMyNfts(_myNfts);
  }

  const findTokenPriceFromOrderArray = (tokenId, orders) => {
    if (orders && orders.length > 0){
      for (const order of orders) {
        if (tokenId == order.id)
          return API.toHuman(order.price, 18).toFixed(0);
      }
      return 0;
    } else {
      return 0;
    }
  }

  const fetchSellOrders = async () => {
    const res = await API.findSellOrders({account});
    if (res && res.data) {
      let _nfts = [];
      for (const nft of res.data) {
        _nfts.push({
          img: nft.img,
          id: nft.tokenId,
          price: API.toHuman(nft.price, 18).toFixed(0),
          order: JSON.parse(nft.makerSignature)
        })
      }
      setSellNfts(_nfts);
    }
  }

  const fetchMyNfts = async () => {
    const {data} = await apolloClient.query({
      query: GET_NFTS,
      variables: {account: account.toLowerCase()}
    });
    
    if (data && data.accounts && data.accounts.length > 0) {
      let ids = [];
      for (const nft of data.accounts[0].nfts) {
        ids.push(nft.id);
      }
      await mapTokenIDsToImages(ids);
    }
  }

  const orderHandler = async () => {
    fetchMyNfts();
    fetchSellOrders();
  }

  const mapTokenIDsToImages = async (tokenIds) => {
    if (blockchain) {
      let _nfts = [];
      const res = await API.getOrders({ids: tokenIds});
      for (const tid of tokenIds) {
        const {data, status} = await blockchain.getTokenUri({tokenID: tid});
        _nfts.push({
          img: data,
          id: tid,
          price: findTokenPriceFromOrderArray(tid, res.data)
        });
      }
      console.log('mynfts: ', _nfts);
      setMyNfts(_nfts);
    }
  }

  useEffect(() => {
    if (account && ethereum) {
			const blockchain = new Blockchain(account, ethereum);
			setBlockchain(blockchain);
		}
  }, [account])

  useEffect(() => {
    if (blockchain) {
      // fetch my nfts
      fetchMyNfts();
      // fetch sell orders
      fetchSellOrders();
    }
  }, [blockchain])
  

  return (
    account ? 
    <>
      <Grid container className={classes.rootContainer}>
        <Grid item>
          <h1>Sell Orders</h1>
        </Grid>
        <Grid container item>
          {
            sellNfts.map((nft, index) => {
              return (
                <Grid item><SellOrder nftImg = {nft.img} order = {nft.order} nftId = {nft.id} orderHandler = {orderHandler} nprice = {nft.price}/></Grid>
              )
            })
          }
        </Grid>
        <Grid item>
          <h1>My Nfts</h1>
        </Grid>
        <Grid container item>
          {
            myNfts.map((nft, index) => {
              return (
                <Grid item><MyNft nftImg = {nft.img} nftId = {nft.id} nprice = {nft.price} updatePrice = {updatePrice}/></Grid>
              )
            })
          }
        </Grid>
        
      </Grid>
    </> : ''
  )
}

export default withRouter(Home);