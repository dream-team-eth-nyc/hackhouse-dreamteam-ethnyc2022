import React from "react";
import {
  Button,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FormInput } from "../FormInputs";
import { FaCamera } from "react-icons/fa";
import InfoForm, { InfoFormData } from "../InfoForm/InfoForm";

type GuildModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaults?: InfoFormData;
};

const GuildModal: React.FC<GuildModalProps> = ({
  isOpen,
  onClose,
  defaults,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent bgColor="gray.900">
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody textAlign="center" pb={8}>
          <Heading fontSize="2xl" mb={4}>
            {defaults ? "Edit Guild Info" : "Create Guild"}
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

export default GuildModal;
