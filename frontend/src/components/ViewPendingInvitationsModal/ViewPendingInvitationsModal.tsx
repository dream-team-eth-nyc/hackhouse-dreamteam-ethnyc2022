import React from "react";
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
} from "@chakra-ui/react";
import GuildCard from "../GuildCard/GuildCard";

type ViewPendingInvitationsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ViewPendingInvitationsModal: React.FC<
  ViewPendingInvitationsModalProps
> = ({ isOpen, onClose }) =>
  isOpen ? (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent bgColor="gray.900">
        <ModalHeader />
        <ModalCloseButton />
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
              { name: "Interesting Iguana" },
            ]}
            numNfts={12}
            numGames={8}
            games={["Axie Infinity", "Eve Online", "Ember Swords"]}
            bgColor="gray.800"
          >
            <VStack>
              <Button colorScheme="green">Accept</Button>
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

export default ViewPendingInvitationsModal;
