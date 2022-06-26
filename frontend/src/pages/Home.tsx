import {
  Text,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import React from "react";
import GuildCard from "../components/GuildCard/GuildCard";

const Home: React.FC = () => {
  return (
    <Container>
      <HStack alignItems="center" justifyContent="space-between">
        <HStack spacing={4}>
          <Heading>Your Guilds</Heading>
          <Text textDecoration="underline" color="gray.400">
            (2 pending)
          </Text>
        </HStack>
        <Button colorScheme="blue" size="lg" leftIcon={<AiOutlinePlus />}>
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
  );
};

export default Home;
