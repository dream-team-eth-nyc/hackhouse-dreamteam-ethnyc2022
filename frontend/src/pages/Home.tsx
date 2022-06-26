import {
  Text,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Button,
  useDisclosure,
  Grid,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import React from "react";
import GuildCard from "../components/GuildCard/GuildCard";
import ViewPendingInvitationsModal from "../components/ViewPendingInvitationsModal";
import GuildModal from "../components/GuildModal";
import { useAccount } from "wagmi";
import { PlugIcon } from "../components/Icons";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: guildOpen,
    onClose: guildOnClose,
    onOpen: guildOnOpen,
  } = useDisclosure();
  const { data } = useAccount();

  return (
    <>
      {guildOpen && <GuildModal isOpen={guildOpen} onClose={guildOnClose} />}
      <ViewPendingInvitationsModal isOpen={isOpen} onClose={onClose} />
      {data ? (
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
            <Link to="/guilds/test">
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
            </Link>
          </SimpleGrid>
        </Container>
      ) : (
        <Grid gridAutoRows="auto" placeItems="center">
          <PlugIcon h="100px" w="100px" mt="15vh" />
          <Text textStyle="heading1" color="white" mt="20px">
            Connect Your Wallet
          </Text>
          <Button variant="secondary" marginTop="1rem">
            Connect Wallet
          </Button>
        </Grid>
      )}
    </>
  );
};

export default Home;
