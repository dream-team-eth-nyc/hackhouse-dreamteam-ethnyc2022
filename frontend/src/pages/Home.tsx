import {
  Text,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import React from "react";
import GuildCard from "../components/GuildCard/GuildCard";
import ViewPendingInvitationsModal from "../components/ViewPendingInvitationsModal";
import GuildModal from "../components/GuildModal";

const Home: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: guildOpen,
    onClose: guildOnClose,
    onOpen: guildOnOpen,
  } = useDisclosure();
  return (
    <>
      <GuildModal isOpen={guildOpen} onClose={guildOnClose} />
      <ViewPendingInvitationsModal isOpen={isOpen} onClose={onClose} />
      <Container>
        <HStack alignItems="center" justifyContent="space-between">
          <HStack spacing={4}>
            <Heading>Your Guilds</Heading>
            <Text
              textDecoration="underline"
              color="gray.400"
              cursor="pointer"
              onClick={onOpen}
            >
              (2 pending)
            </Text>
          </HStack>
          <Button
            colorScheme="blue"
            size="lg"
            leftIcon={<AiOutlinePlus />}
            onClick={guildOnOpen}
          >
            Create Guild
          </Button>
        </HStack>
        <SimpleGrid columns={2} spacing={8} mt={8}>
          <GuildCard
            name="Dragon Guild"
            address="0x66C692026043a4E2E3276dceB7Fa476167CA0C09"
            members={[
              {
                name: "Test",
              },
              { name: "Test 2" },
            ]}
            numNfts={12}
            numGames={8}
            games={["Axie Infinity", "Eve Online", "Ember Swords"]}
          />
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Home;
