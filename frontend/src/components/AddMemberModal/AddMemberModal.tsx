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
import {useContractWrite} from 'wagmi';
import guildBondAbi from '../../abis/GuildBond.json';

type AddMemberData = {
  address: string;
};

type AddMemberModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: () => void;
};

const AddMemberModal: React.FC<AddMemberModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const { isLoading, writeAsync } = useContractWrite(
    {
      addressOrName: '0x26984bB34673A5ADdE416f418EFa5784EbAAF56F',
      contractInterface: guildBondAbi,
    },
    'emitSoulBond',
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddMemberData>();

  const onSubmit = async ({ address }: AddMemberData) => {
    const txn =await  writeAsync({
      args: [address]
    })
    onAdd();
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
          <Button mr={3} onClick={handleSubmit(onSubmit)} colorScheme="blue" isLoading={isLoading}>
            Add Member
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddMemberModal;
