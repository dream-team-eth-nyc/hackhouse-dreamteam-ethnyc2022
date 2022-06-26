/* eslint-disable react/prop-types */
import LinkButton from "../components/LinkButton";
import {
  Grid,
  Text,
  Box,
  Flex,
  BoxProps,
  IconButton,
  Button,
  Image,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  AccordionButton,
  Accordion,
  AccordionIcon,
  Divider,
  useDisclosure,
  AccordionItem,
} from "@chakra-ui/react";
import { BiChevronLeft, BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";
import { BsPencil } from "react-icons/bs";
import AddMemberModal from "../components/AddMemberModal";
import { useState } from "react";
import LeaveGuildModal from "../components/LeaveGuildModal";
import {useContractWrite} from 'wagmi';
import guildBondAbi from '../abis/GuildBond.json';

const GuildBadge: React.FC<{ title: string; number: number } & BoxProps> = ({
  title,
  number,
  ...props
}) => (
  <Box
    background="gray.900"
    width="110px"
    color="white"
    borderRadius="10px"
    px="10px"
    py="20px"
    {...props}
  >
    <Text fontSize="14px">{title}</Text>
    <Text fontSize="40px" fontWeight="bold">
      {number}
    </Text>
  </Box>
);

const GuildMemberCard: React.FC<
  { name: string; address: string; imageSrc: string } & BoxProps
> = ({ name, address, imageSrc, ...props }) => (
  <Grid
    gridTemplate={`"image name" auto
"image address" auto
/ 48px auto
`}
    width="230px"
    userSelect="none"
    color="white"
    borderRadius="10px"
    px="30px"
    py="20px"
    gridColumnGap="20px"
    mr="10px"
    borderWidth="1px"
    borderColor="gray.700"
    {...props}
  >
    <Image
      src={imageSrc}
      placeSelf="center"
      borderRadius="999px"
      gridArea="image"
      height="48px"
      width="48px"
    />
    <Text
      fontSize="16px"
      gridArea="name"
      placeSelf="start"
      color="gray.100"
      fontWeight="bold"
    >
      {name}
    </Text>
    <Text fontSize="12px" color="gray.500" gridArea="address" placeSelf="start">
      {address}
    </Text>
  </Grid>
);

const MY_NAME = "Crazy Quail";

type GuildMember = {
  name: string;
  address: string;
  message: string;
  imageSrc: string;
  nfts: GameNft[];
};

type GameNft = {
  imageSrc: string;
  link: string;
};

const fakeGuildMembers: GuildMember[] = [
  {
    name: "Rabid Melon",
    address: "",
    message: "Victory or Death!",
    imageSrc: 'https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png',
    nfts: [
      {
        imageSrc: `${process.env.PUBLIC_URL}/Snake.jpg`,
        link: "https://nyc.ethglobal.co/",
      }
    ],
  },
  {
    name: "Crazy Quail",
    address: "crazyquail.eth",
    message: "sic itur ad astra.",
    imageSrc: 'http://jingculturecommerce.com/wp-content/uploads/2021/11/rtfkt-murakami-clone-x-4-1024x682.jpg',
    nfts: [],
  },
];

const GameCard: React.FC<
  {
    name: string;
    imageSrc: string;
    guildMembers: GuildMember[];
  } & BoxProps
> = ({ name, imageSrc, guildMembers, ...props }) => (
  <AccordionItem borderColor="transparent" width="100%" mb="20px" {...props}>
    {({ isExpanded }) => (
      <>
        <AccordionButton
          p="24px"
          background="gray.800"
          borderRadius="10px"
          _hover={{
            background: "gray.800",
          }}
          display="flex"
          flexDir="column"
        >
          <Grid
            gridTemplateColumns="80px 2fr 1fr 1fr auto"
            w="100%"
            gridColumnGap="20px"
            placeItems="center"
            {...props}
          >
            <Image
              src={imageSrc}
              placeSelf="center"
              borderRadius="999px"
              height="80px"
              width="80px"
            />
            <Text textStyle="heading2" placeSelf="center start">
              {name}
            </Text>
            <Text textStyle="subheading2" placeSelf="center">
              {guildMembers.reduce(
                (sum, member) => sum + member.nfts.length,
                0
              )}{" "}
              NFTs
            </Text>
            <Text textStyle="subheading2" placeSelf="center">
              {guildMembers.length}{" "}
              {guildMembers.length === 1 ? "Profile" : "Profiles"}
            </Text>
            <IconButton
              aria-label="more"
              icon={<AccordionIcon />}
              background="gray.700"
            />
          </Grid>
          {isExpanded && guildMembers.length ? (
            <>
              <Grid
                w="100%"
                gridTemplateColumns="1fr auto 1fr"
                gridColumnGap="12px"
                placeItems="center"
              >
                <Divider
                  borderTopWidth="1px"
                  borderColor="gray.700"
                  width="100%"
                />
                <Text color="gray.700">Guild Members with NFTs</Text>
                <Divider
                  borderTopWidth="1px"
                  borderColor="gray.700"
                  width="100%"
                />
              </Grid>
              {guildMembers.map((member, index) => (
                <Grid
                  key={`${name}-${member.name}-${index}`}
                  userSelect="none"
                  color="white"
                  py="20px"
                  h="110px"
                  w="100%"
                  gridColumnGap="20px"
                  gridTemplateColumns="1fr 1fr 3fr 2fr 2fr 1fr"
                  placeItems="center"
                >
                  <Image
                    src={member.imageSrc}
                    placeSelf="center"
                    borderRadius="999px"
                    height="48px"
                    width="48px"
                  />
                  <Grid
                    placeSelf="center start"
                    gridRowGap="10px"
                    gridAutoFlow="row"
                  >
                    <Text
                      fontSize="16px"
                      placeSelf="start"
                      color="gray.100"
                      fontWeight="bold"
                    >
                      {member.name}
                    </Text>
                    <Text fontSize="12px" color="gray.500" placeSelf="start">
                      {member.address}
                    </Text>
                  </Grid>
                  <Text placeSelf="center start">{member.message} {member.name === MY_NAME && <IconButton ml="1rem" icon={<BsPencil />} aria-label="edit" />}</Text>
                  <Text>{member.nfts.length} NFTs</Text>
                  <Box overflow="hidden">
                    <Grid gridColumnGap="10px" gridAutoFlow="column" placeItems="start">
                      {member.nfts.length ? member.nfts.map((nft, index) => (
                        <Image
                          h="70px"
                          src={nft.imageSrc}
                          key={`${member.name}-nft-${index}`}
                        />
                      )) : "No NFTs For Game Owned"}
                    </Grid>
                  </Box>
                  {member.name === MY_NAME ? (
                    <Button variant="primary" disabled placeSelf="center end">
                      You
                    </Button>
                  ) : (
                    <Button variant="primary" placeSelf="center end">
                      Play
                    </Button>
                  )}
                </Grid>
              ))}
            </>
          ) : null}
        </AccordionButton>
      </>
    )}
  </AccordionItem>
);

export default function ViewGuild() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isOpen: lOpen, onClose: lOnClose, onOpen: lOnOpen } = useDisclosure();

  const [members, setMembers] = useState([fakeGuildMembers[1]]);

  const handleAdd = (address: string) => {
    fakeGuildMembers[0].address = address;
    setMembers(fakeGuildMembers);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <AddMemberModal isOpen={isOpen} onClose={onClose} onAdd={handleAdd} />
      )}
      {lOpen && (
        <LeaveGuildModal
          isOpen={lOpen}
          onClose={lOnClose}
          onLeave={() => console.log("leave")}
        />
      )}
      <Grid gridAutoColumns="auto" gridRowGap="20px" mx="149px" mt="20px">
        <LinkButton
          href="/"
          variant="text"
          color="blue.600"
          placeSelf="start"
          px="0"
          transform="translateX(-0.5rem)"
          _hover={{
            color: "blue.300",
          }}
        >
          <BiChevronLeft />
          Back to your guilds
        </LinkButton>
        <Grid
          gridTemplate={`
"emblem text" auto
/ auto 1fr
        `}
          gridColumnGap="20px"
          gridAutoFlow="column"
          h="32"
        >
          <Image
            src={`${process.env.PUBLIC_URL}/Avatar1.png`}
            placeSelf="center"
            borderRadius="999px"
            height="32"
            width="32"
          />
          <Flex flexDir="column" gridRowGap="17px" userSelect="none">
            <Text textStyle="heading1">Dragon Guild</Text>
            <Text textStyle="label1">OxBitches</Text>
            <Text fontSize="14px" color="gray.400">
              The boys playing games about dragons
            </Text>
          </Flex>
          <GuildBadge title="Members" number={members.length} />
          <GuildBadge title="Total NFTs" number={members.reduce((sum, member) => sum + member.nfts.length, 0)} />
          <GuildBadge title="Games" number={1} />
          <Menu>
            <MenuButton
              placeSelf="center"
              as={IconButton}
              icon={<BiDotsHorizontalRounded />}
            />
            <MenuList>
              <MenuItem onClick={lOnOpen}>Leave Guild</MenuItem>
              <MenuItem>Edit Guild</MenuItem>
              {/* TODO replace with correct explorer */}
              <MenuItem>See on Snowtrace</MenuItem>
            </MenuList>
          </Menu>
        </Grid>
        <Grid gridAutoFlow="column">
          <Text
            placeSelf="start"
            textStyle="subheading2"
            color="gray.400"
            userSelect="none"
          >
            Members
          </Text>
          <Button variant="primary" placeSelf="end" onClick={onOpen}>
            <AiOutlinePlus />
            Add Member
          </Button>
        </Grid>
        <HStack>
          {members.map((props) => (
            <GuildMemberCard key={JSON.stringify(props)} {...props} />
          ))}
        </HStack>
        <Text
          placeSelf="start"
          textStyle="subheading2"
          color="gray.400"
          userSelect="none"
        >
          Games
        </Text>
        <Accordion>
          <GameCard
            name="Axie Infinity"
            guildMembers={fakeGuildMembers}
            imageSrc={`${process.env.PUBLIC_URL}/image7.png`}
          />
        </Accordion>
      </Grid>
    </>
  );
}
