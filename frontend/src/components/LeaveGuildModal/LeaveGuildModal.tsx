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
  Text,
} from "@chakra-ui/react";

type LeaveGuildModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLeave: () => void;
};

const LeaveGuildModal: React.FC<LeaveGuildModalProps> = ({
  isOpen,
  onClose,
  onLeave,
}) => (
  <Modal isOpen={isOpen} onClose={onClose} size="md">
    <ModalOverlay />
    <ModalContent bgColor="gray.900">
      <ModalHeader />
      <ModalCloseButton />
      <ModalBody textAlign="center">
        <Heading fontSize="2xl">Leave Guild</Heading>
        <Text mt={8} color="gray.400">
          Are you sure you want to leave this guild? This is an irreversable
          action.
        </Text>
      </ModalBody>

      <ModalFooter textAlign="center" justifyContent="center">
        <HStack spacing={2}>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onLeave} colorScheme="red">
            Leave Guild
          </Button>
        </HStack>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default LeaveGuildModal;
