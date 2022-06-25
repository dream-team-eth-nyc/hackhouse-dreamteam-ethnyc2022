import "../styles/globals.scss";
import Layout from "@/components/Layout/Layout";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "store";
import React from 'react';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ChainId, IpfsStorage, ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from 'next/app';
import Navbar from "@/components/Navbar/Navbar";

const persistor = persistStore(store);

const App: React.FC<any> = ({ Component, pageProps }) => {
  // return <Component {...pageProps} />
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <ThirdwebProvider
          desiredChainId={ChainId.Mainnet}
          storageInterface={new IpfsStorage()}
          // ipfsStorage={new IpfsStorage({
          //   ipfsApiUrl: "http://localhost:5001",
          //   ipfsGatewayUrl: "http://localhost:8080"
          // })}
          // walletConnectors={[
          //   "walletConnect",
          //   { name: "injected", options: { shimDisconnect: false } },
          //   {
          //     name: "walletLink",
          //     options: {
          //       appName: "DreamTeamGuildSoulbound",
          //     },
          //   },
          // ]}
        >
          <PersistGate persistor={persistor}>
            <Navbar />
            {Component.getLayout ? (
              <>{getLayout(<Component {...pageProps} />)}</>
            ) : (
              <>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </>
            )}
          </PersistGate>
        </ThirdwebProvider>
      </ChakraProvider>
    </ReduxProvider>
  );
}

export default App;
