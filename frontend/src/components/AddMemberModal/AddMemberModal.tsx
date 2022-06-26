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
import { useForm } from "react-hook-form";
import { FormInput } from "../FormInputs";
import { FaCamera } from "react-icons/fa";

type AddMemberData = {
  address: string;
};

type AddMemberModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (address: string) => void;
};

const AddMemberModal: React.FC<AddMemberModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddMemberData>();

  const onSubmit = ({ address }: AddMemberData) => {
    onAdd(address);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent bgColor="gray.900">
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody textAlign="center">
          <Heading fontSize="2xl">Add Member</Heading>
          <Text mt={8} color="gray.400">
            Add member to guild using wallet address or QR code
          </Text>
          <FormInput
            label="Wallet Address or ENS"
            inputGroupProps={{ size: "lg" }}
            error={errors?.address?.message}
            helperText="The users wallet address or ENS"
            rightItem={
              <IconButton aria-label="Scan code" icon={<FaCamera />} />
            }
            my={6}
            inputProps={{
              placeholder: "0x... or caelin.eth",
              ...register("address", {
                required: {
                  value: true,
                  message: "This is required",
                },
              }),
            }}
          />
        </ModalBody>

        <ModalFooter textAlign="center" justifyContent="center">
          <Button mr={3} onClick={handleSubmit(onSubmit)} colorScheme="blue">
            Add Member
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddMemberModal;
