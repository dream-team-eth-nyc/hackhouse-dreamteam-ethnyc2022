import "../styles/globals.scss";
import Layout from "@/components/Layout/Layout";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
// import { DAppProvider, ChainId } from '@usedapp/core';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ChainId, IpfsStorage, ThirdwebProvider } from "@thirdweb-dev/react";


let persistor = persistStore(store);

export default function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ReduxProvider store={store}>
      <ThirdwebProvider
        chainId={ChainId.MAINNET}
        ipfsStorage={new IpfsStorage()} // IPFS HOST RPC goes here
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
          {Component.getLayout ? (
            <>
              {getLayout(<Component {...pageProps} />)}
            </>
          ) : (
            <>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </>
          )}
        </PersistGate>
      </ThirdwebProvider>
    </ReduxProvider>

  )

}

