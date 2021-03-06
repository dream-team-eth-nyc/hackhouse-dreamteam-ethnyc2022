import React, { useEffect } from "react";
import {
  Button,
  Heading,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  useToast,
} from "@chakra-ui/react";
import GuildCard from "../GuildCard/GuildCard";
import {useAccount, useContractWrite} from 'wagmi';
import guildBondAbi from '../../abis/GuildBond.json';

type ViewPendingInvitationsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: () => void;
};

const ViewPendingInvitationsModal: React.FC<
  ViewPendingInvitationsModalProps
> = ({ isOpen, onClose, onAdd }) => {
  const toast = useToast();
  const { data } = useAccount();
  const { isLoading, writeAsync, data: writeData, error: writeError } = useContractWrite(
    {
      addressOrName: '0x492B76c462B1060903A9094557ebc8fA69789dcd',
      contractInterface: guildBondAbi,
    },
    'emitSoulBond',
  );

  useEffect(() => {
    if (writeData) {
      toast({
        title: 'Accepted Invitation!',
        status: 'success'
      })
      onClose();
    }
  }, [writeData])

  useEffect(() => {
    if (writeError) {
      toast({
        title: 'Error accepting invitation',
        description: writeError.message,
        status: 'error'
      })
      onAdd();
      onClose();
    }
  }, [writeError])


  const onAccept = async () => {
    await  writeAsync({
      args: [data?.address]
    })
  };

  return isOpen ? (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay/>
      <ModalContent bgColor="gray.900">
        <ModalHeader/>
        <ModalCloseButton/>
        <ModalBody textAlign="center">
          <Heading fontSize="2xl">Pending Guild Invitations</Heading>
          <Text mt={8} color="gray.400">
            Accept or reject your invitations
          </Text>
          <GuildCard
            mt={4}
            name="Boar Guild"
            address="0x66C692026043a4E2E3276dceB7Fa476167CA0C09"
            members={[
              {
                name: "Bored Ape",
              },
              {name: "Interesting Iguana"},
            ]}
            numNfts={12}
            numGames={8}
            games={["Snook", "Eve Online"]}
            bgColor="gray.800"
          >
            <VStack>
              <Button colorScheme="green" isLoading={isLoading} onClick={onAccept}>Accept</Button>
              <Button colorScheme="red">Reject</Button>
            </VStack>
          </GuildCard>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ) : null;
};

export default ViewPendingInvitationsModal;
