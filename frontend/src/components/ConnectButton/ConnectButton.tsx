import React, { RefObject, useEffect } from "react";
import { Avatar, Button, useDisclosure } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import ConnectModal from "../ConnectModal";
import truncateText from "../../utils/truncateText";
import ConnectedStatusModal from "../ConnectedStatusModal";
import UserSidebar from "../UserSidebar";

const ConnectButton: React.FC = () => {
  const { data } = useAccount();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: connectedOpen,
    onClose: connectedOnClose,
    onOpen: connectedOnOpen,
  } = useDisclosure();
  const { isOpen: sOpen, onOpen: sOnOpen, onClose: sOnClose } = useDisclosure();
  const btnRef = React.useRef() as RefObject<any>;

  if (data)
    return (
      <>
        <ConnectedStatusModal
          isOpen={connectedOpen}
          onClose={connectedOnClose}
        />
        <Button variant="outline" onClick={connectedOnOpen}>
          caelin.eth | {truncateText(data?.address)}
        </Button>
        <Avatar onClick={sOnOpen} size="md" cursor="pointer" />

        {sOpen && (
          <UserSidebar
            isOpen={sOpen}
            placement="right"
            onClose={sOnClose}
            finalFocusRef={btnRef}
          />
        )}
      </>
    );

  return (
    <>
      <ConnectModal isOpen={isOpen} onClose={onClose} />
      <Button colorScheme="blue" onClick={() => onOpen()}>
        Connect Wallet
      </Button>
    </>
  );
};

export default ConnectButton;
