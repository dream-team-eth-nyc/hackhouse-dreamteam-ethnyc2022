import {
  useDisconnect, useWalletConnect, useAddress, useMetamask, useChainId,
  useBalance
} from "@thirdweb-dev/react";
// import { useEthers, useEtherBalance, useLookupAddress, shortenAddress } from "@usedapp/core";



import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop, faBan } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";

import { IconButton } from '@chakra-ui/react'

import Jazzicon from "@metamask/jazzicon";
// import Identicon from "./Identicon";
import styles from './ConnectButtons.module.scss'

import { Button } from "@chakra-ui/react";

import { utils } from 'ethers'
import router from "next/router";


export default function ConnectButtons() {

  const address = useAddress();
  const balance = useBalance();
  const getChainId = useChainId();
  const disconnect = useDisconnect();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithMetamask = useMetamask();
  // const etherBalance = useEtherBalance(address);
  // all major chains and testnets are supported (e.g. `mainnet`, `rinkeby`, `goerli`, 'polygon', 'mumbai', etc.)
  // const balance = await sdk.wallet.balance();
  // const balance = await sdk.wallet.balance();
  // const ens = useLookupAddress(address);


  const acctIconRef = useRef()
  useEffect(() => {
    if (address && acctIconRef.current) {
      acctIconRef.current.innerHTML = "";
      acctIconRef.current.append(Jazzicon(16, parseInt(address.slice(2, 10), 16)));
    }
  }, [address])



  return (
    <>
      <div>
        { address ? (
            // container for ethereum balance and address listing
            <>
            <div className={styles.buttonContainer}>
              <div className={styles.ethBalance}>
                {`${balance} ETH`}
                {/* {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH */}
              </div>
              <div className={styles.addressInfo}>
                {address ? (
                  <>
                    {address}
                    <br />
                    chainId: {getChainId ?? "error"}
                  {/* <Identicon /> */}
                  <div ref={acctIconRef} className={styles.addressIconStyle}>
                  </div>
                  </>
                ) : (
                  <>
                    <span>Loading...</span>
                  </>
                )}


              </div>
              <IconButton variant="link" 
                icon={<FontAwesomeIcon className={styles.disconnectIcon} icon={faBan} onClick={disconnect} />}
              />
            </div>
          </>
        ) : (
          <>
            <Button onClick={connectWithWalletConnect}>Connect With WalletConnect</Button>
            <br />
            <Button onClick={connectWithMetamask}>Connect With Metamask</Button>
          </>
          ) 
        }
      </div>
    </>
  )

}