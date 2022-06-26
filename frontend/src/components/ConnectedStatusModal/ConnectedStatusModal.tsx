import React from "react";
import {
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useAccount, useDisconnect } from "wagmi";

type ConnectedStatusModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ConnectedStatusModal: React.FC<ConnectedStatusModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { data } = useAccount();
  const { disconnectAsync, isLoading } = useDisconnect();
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent bgColor="gray.900">
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody textAlign="center">
          {data ? (
            <>
              <Heading fontSize="2xl">
                ${data?.connector?.name} Connected
              </Heading>
              <Text mt={8} color="gray.400">
                {data.address}
              </Text>
            </>
          ) : (
            <Spinner />
          )}
        </ModalBody>

        <ModalFooter textAlign="center" justifyContent="center">
          <HStack spacing={2}>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              onClick={async () => {
                await disconnectAsync();
                onClose();
              }}
              colorScheme="red"
              isLoading={isLoading}
            >
              Disconnect
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConnectedStatusModal;
