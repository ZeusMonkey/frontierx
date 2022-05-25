import React, { useEffect, useState } from 'react';
import { useStatePersist } from 'use-state-persist';
import '../App.css'
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { useWallet } from 'use-wallet';
import Grid from "@mui/material//Grid";
import { withRouter } from "react-router-dom";
import Blockchain from '../module/blockchain';

const useStyles = makeStyles((theme) => ({
	buttonWrapper: {
		padding: 20
	},

	headerButton: {
		margin: "0 20px 0 20px !important"
	}
}));


function Header() {
	const classes = useStyles();
	/* Will try to connect on load unless true. Default is true. */
	const [userDisconnected, setUserDisconnected] = useStatePersist(true);
	const { account, connect, reset, ethereum } = useWallet();
	const [pending, setPending] = useState(false);
	const [blockchain, setBlockchain] = useState(null);

	const mintNFT = () => {
		let data = {quantity: 1};
		if (blockchain && !pending) {
			setPending(true);
			blockchain.mint(data).then(({hash, status}) => {
				setPending(false);
				if (status) {
					alert('minted');
				} else {
					alert('mint failed');
				}
			})
		}
	}

	const connectOrDisconnect = () => {
		if (account) {
			setUserDisconnected(true);
			reset();
		} else {
			setUserDisconnected(false);
			connect('injected')
		}
	}

	useEffect(() => {
		if (!account && !userDisconnected) {
			connect();
		}
		if (account && ethereum) {
			const blockchain = new Blockchain(account, ethereum);
			setBlockchain(blockchain);
		}
	}, [account, userDisconnected])

	return (
		<Grid container className={classes.buttonWrapper} justifyContent="flex-end">
			<Grid item>
				{
					account !== null ?
					<>
						<Button
							variant="contained"
							color="primary"
							className={classes.headerButton}
							onClick={mintNFT}
						>
							Mint NFT
						</Button>
					</> : ""
				}
				<Button
						variant="contained"
						color="primary"
						className={classes.headerButton}
						onClick={connectOrDisconnect}
				>
					{account === null ? "Connect" : "Disconnect"}
				</Button>
			</Grid>
		</Grid>
	);
}

export default withRouter(Header);
