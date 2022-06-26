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
} from "@chakra-ui/react";
import { BiChevronLeft, BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";
import { useParams } from "react-router-dom";

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
    width="200px"
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

const GameCard: React.FC<
  {
    name: string;
    nftCount: number;
    profileCount: number;
    imageSrc: string;
  } & BoxProps
> = ({ name, imageSrc, nftCount, profileCount, ...props }) => (
  <Grid
    gridTemplateColumns="80px 2fr 1fr 1fr auto"
    p="24px"
    gridColumnGap="20px"
    background="gray.800"
    borderRadius="10px"
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
      {nftCount} {nftCount === 1 ? "NFT" : "NFTs"}
    </Text>
    <Text textStyle="subheading2" placeSelf="center">
      {profileCount} {profileCount === 1 ? "Profile" : "Profiles"}
    </Text>
    <IconButton
      aria-label="more"
      icon={<GoTriangleDown />}
      background="gray.700"
    />
  </Grid>
);

export default function ViewGuild() {
  const params = useParams();

  return (
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
        <GuildBadge title="Members" number={69} />
        <GuildBadge title="Total NFTs" number={69} />
        <GuildBadge title="Games" number={69} />
        <Menu>
          <MenuButton
            placeSelf="center"
            as={IconButton}
            icon={<BiDotsHorizontalRounded />}
          />
          <MenuList>
            <MenuItem>Leave Guild</MenuItem>
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
        <Button variant="primary" placeSelf="end">
          <AiOutlinePlus />
          Add Member
        </Button>
      </Grid>
      <HStack>
        <GuildMemberCard
          imageSrc={`${process.env.PUBLIC_URL}/Avatar.png`}
          name="Bob"
          address="0xTalent"
        />
        <GuildMemberCard
          imageSrc={`${process.env.PUBLIC_URL}/Avatar.png`}
          name="Bob"
          address="0xTalent"
        />
      </HStack>
      <Text
        placeSelf="start"
        textStyle="subheading2"
        color="gray.400"
        userSelect="none"
      >
        Games
      </Text>
      <GameCard
        name="Axie Infinity"
        nftCount={13}
        profileCount={69}
        imageSrc={`${process.env.PUBLIC_URL}/image7.png`}
      />
    </Grid>
  );
}
