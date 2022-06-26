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
import React, { useState } from "react";
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

  const [guilds, setGuilds] = useState([{
    image: `${process.env.PUBLIC_URL}/Avatar1.png` as any,
    name: "Dragon Guild",
    address: "0x66C692026043a4E2E3276dceB7Fa476167CA0C09",
    members: [
      {
        name: "Rabid Melon",
        image: 'https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png'
      },
      {
        name: "Crazy Quail",
        image: 'http://jingculturecommerce.com/wp-content/uploads/2021/11/rtfkt-murakami-clone-x-4-1024x682.jpg'
      },
    ],
    numNfts: 1,
    numGames: 1,
    games: ["Snook"],
  }
  ])

  const handleAdd = () => {
    setGuilds(p => [...p, {
      image: '',
      name: "Boar Guild",
      address: "0x66C692026043a4E2E3276dceB7Fa476167CA0C09",
      members: [
        {
          name: "Bored Ape",
          image: '',
        },
        {
          name: "Interesting Iguana",
          image: '',
        },
      ],
      numNfts: 12,
      numGames: 8,
      games: ["Snook", "Eve Online"],
    }])
  }

  return (
    <>
      {guildOpen && <GuildModal isOpen={guildOpen} onClose={guildOnClose} />}
      <ViewPendingInvitationsModal isOpen={isOpen} onClose={onClose} onAdd={handleAdd} />
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
                (1 pending)
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
            {guilds.map((props: any) =>
              <Link to="/guilds/test" key={props.name + props.image}>
                <GuildCard
                  {...props}
                />
              </Link>)}
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
