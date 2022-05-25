import './App.css';
import Layout from "./pages/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@mui/styles';
import { createTheme } from "@mui/material/styles";
import { createStore } from "redux";
import { reducer } from "./redux";
import { Provider } from 'react-redux';
import { UseWalletProvider } from 'use-wallet';
import rpcInfo from './config/rpc.json';

const store = createStore(reducer);
function App() {
  function getThemeType() {
    return createTheme({
        palette: {
            type: "light",
            background: {
                default: '#ffffff',
            },
        },
    });
  }

  return (
    <Provider store={store} >
      <ThemeProvider theme={getThemeType()}>
        <UseWalletProvider
          connectors={{
              walletconnect: { rpcUrl: rpcInfo.testnet.rpc },
              injected: {
                chainId: [rpcInfo.testnet.chainId]
              }
          }}
        >
          <CssBaseline />
          <Layout />
        </UseWalletProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
