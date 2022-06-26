import React from "react";
import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import InfoForm, { InfoFormData } from "../InfoForm/InfoForm";

type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaults?: InfoFormData;
};

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, defaults }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent bgColor="gray.900">
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody textAlign="center" pb={8}>
          <Heading fontSize="2xl" mb={4}>
            Edit User Info
          </Heading>
          <InfoForm
            onSubmit={(data) => console.log(data)}
            defaults={defaults}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UserModal;
