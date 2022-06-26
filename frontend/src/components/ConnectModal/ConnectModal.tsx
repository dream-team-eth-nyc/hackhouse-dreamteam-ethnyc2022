import React, { useEffect } from "react";
import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import InfoForm from "../InfoForm";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";

import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

type ConnectModal = {
  isOpen: boolean;
  onClose: () => void;
};

const coinbaseWalletConnector = new CoinbaseWalletConnector({
  options: {
    appName: "wagmi.sh",
    jsonRpcUrl: "https://eth-mainnet.alchemyapi.io/v2/yourAlchemyId",
  },
});

const metamaskConnector = new MetaMaskConnector();

const walletConnectConnector = new WalletConnectConnector({
  options: {
    qrcode: true,
  },
});

const ConnectModal: React.FC<ConnectModal> = ({ isOpen, onClose }) => {
  const { data } = useAccount();
  const { connect: coinbaseConnect, error: coinbaseError } = useConnect({
    connector: coinbaseWalletConnector,
  });

  useEffect(() => {
    console.log(coinbaseError);
  }, [coinbaseError]);

  const { connect: metamaskConnect, error: metamaskError } = useConnect({
    connector: metamaskConnector,
  });

  useEffect(() => {
    console.log(metamaskError);
  }, [metamaskError]);

  const { connect: walletConnect, error: walletConnectError } = useConnect({
    connector: walletConnectConnector,
  });

  useEffect(() => {
    console.log(walletConnectError);
  }, [walletConnectError]);

  useEffect(() => {
    if (data) onClose();
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent bgColor="gray.900">
        <ModalHeader>Connect Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="center" pb={8}>
          <VStack spacing={2}>
            <Button
              variant="outline"
              onClick={async () => {
                await metamaskConnect();
                onClose();
              }}
              size="lg"
            >
              Metamask
            </Button>
            <Button
              variant="outline"
              onClick={async () => {
                await coinbaseConnect();
                onClose();
              }}
              size="lg"
            >
              Coinbase Wallet
            </Button>
            <Button
              variant="outline"
              onClick={async () => {
                await walletConnect();
                onClose();
              }}
              size="lg"
            >
              Wallet Connect
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConnectModal;
