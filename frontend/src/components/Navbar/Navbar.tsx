import React, { RefObject } from "react";
import {
  HStack,
  Grid,
  Box,
  Button,
  Avatar,
  useDisclosure,
} from "@chakra-ui/react";
import { MockCountryPicker, TeamIcon } from "../Icons";
import LinkButton from "../LinkButton";
import { Link } from "react-router-dom";
import UserSidebar from "../UserSidebar";

const Navbar = () => {
  const walletConnected = true;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef() as RefObject<any>;
  return (
    <>
      <Grid
        w="100%"
        color="white"
        gridTemplateColumns="1fr 1fr 1fr"
        px="27px"
        my={18}
      >
        <Link to="/">
          <TeamIcon w={20} h="auto" color="white" />
        </Link>
        <Box placeSelf="center">
          <LinkButton
            href="/"
            variant="text"
            mr="2"
            activeProps={{ variant: "primary" }}
          >
            Guilds
          </LinkButton>
          <LinkButton
            href="/documentation"
            variant="text"
            activeProps={{ variant: "primary" }}
          >
            Documentation
          </LinkButton>
        </Box>
        <Box color="white" placeSelf="center end">
          <MockCountryPicker h="20px" w="68px" margin="18px" />
          {walletConnected ? (
            <Avatar onClick={onOpen} size="md" />
          ) : (
            <Button variant="secondary">Connect Wallet</Button>
          )}
        </Box>
      </Grid>
      <UserSidebar
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      />
    </>
  );
};

export default Navbar;
