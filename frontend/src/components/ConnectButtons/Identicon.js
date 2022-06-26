// // Identicon.tsx
// import { useEffect, useRef } from "react";
// import { useEthers } from "@usedapp/core";
// import Jazzicon from "@metamask/jazzicon";
// import styles from './ConnectButton.module.scss'

// export default function Identicon() {
//   const ref = useRef();
//   const { account } = useEthers();

//   useEffect(() => {
//     if (account && ref.current) {
//       ref.current.innerHTML = "";
//       ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)));
//     }
//   }, [account]);

//   return (
    
//   ) 
// }
