import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Heading,
  HStack,
  IconButton,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import React from "react";
import { FiEdit } from "react-icons/fi";
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";

const UserSidebar: React.FC<Omit<DrawerProps, "children">> = (props) => (
  <Drawer {...props} size="sm">
    <DrawerOverlay />
    <DrawerContent bgColor="gray.900">
      <DrawerCloseButton />
      <DrawerHeader>My Account</DrawerHeader>

      <DrawerBody>
        <Avatar size="lg" mt={4} />
        <Text color="gray.500" mt={2} fontSize="xs">
          Click to Upload
        </Text>
        <HStack spacing={4} alignItems="center" mt={6}>
          <Heading as="h3" fontSize="2xl">
            Test User
          </Heading>
          <IconButton icon={<FiEdit />} size="sm" aria-label="Edit Label" />
        </HStack>
        <Text fontSize="xs" color="gray.500" mt={2}>
          0x66C692026043a4E2E3276dceB7Fa476167CA0C09
        </Text>
        <Text mt={2}>Gamer Heart</Text>
        <Heading as="h3" fontSize="xl" fontWeight="bold" mt={6}>
          Active Games
        </Heading>

        <Wrap mt={4}>
          <Tag bgColor="gray.700" color="gray.50">
            Axie Inifinity
          </Tag>
        </Wrap>
        <Heading as="h3" fontSize="xl" fontWeight="bold" mt={6}>
          NFTs
        </Heading>
      </DrawerBody>

      <DrawerFooter>
        <HStack spacing={4}>
          <IconButton aria-label="Linkedin" icon={<FaLinkedin />} />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton aria-label="Discord" icon={<FaDiscord />} />
        </HStack>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default UserSidebar;
