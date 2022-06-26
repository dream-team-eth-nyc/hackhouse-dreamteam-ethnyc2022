import React, { ReactNode } from "react";
import {
  Avatar,
  Stack,
  Heading,
  HStack,
  VStack,
  Tag,
  Text,
  Wrap,
  WrapItem,
  BoxProps,
} from "@chakra-ui/react";
import truncateText from "../../utils/truncateText";

type GuildCardProps = {
  image?: string;
  name: string;
  address: string;
  members: { image?: string; name: string }[];
  numNfts: number;
  numGames: number;
  games: string[];
} & BoxProps;

const GuildCard: React.FC<GuildCardProps> = ({
  name,
  address,
  image,
  members,
  numGames,
  numNfts,
  games,
  children,
  ...props
}) => (
  <HStack
    spacing={12}
    bgColor="gray.900"
    px={12}
    py={8}
    borderRadius="md"
    {...props}
  >
    <Avatar size="xl" name={name} src={image} />
    <Stack justifyContent="start" alignItems="start" spacing={2}>
      <HStack alignItems="center">
        <Heading as="h3" fontSize="lg">
          {name}
        </Heading>
        <Text color="gray.500">{truncateText(address)}</Text>
      </HStack>
      <HStack>
        <Text fontSize="xs" color="gray.300">
          {members.length} Members
        </Text>
        {members.slice(0, 8).map(({ name: memberName, image }) => (
          <Avatar
            size="xs"
            name={memberName}
            src={image}
            key={memberName + image}
          />
        ))}
        {members.length > 8 ? (
          <Text fontSize="xs">+{members.length - 8}</Text>
        ) : null}
      </HStack>
      <HStack justifyContent="space-between">
        <HStack>
          <Text>$2.5k earned</Text>
        </HStack>
        <HStack>
          <Text>{numNfts} NFTs</Text>
        </HStack>
        <HStack>
          <Text>{numGames} Games</Text>
        </HStack>
      </HStack>
      <Text fontSize="xs" color="gray.500">
        Games
      </Text>
      <Wrap>
        {games.map((game) => (
          <WrapItem key={game}>
            <Tag bgColor="gray.700" color="gray.50">
              {game}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Stack>
    {children}
  </HStack>
);

export default GuildCard;
