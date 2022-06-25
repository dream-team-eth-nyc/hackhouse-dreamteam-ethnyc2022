import React from "react";
import { HStack, Box } from "@chakra-ui/react";

const Navbar = () => {
  const walletConnected = false;

  return (
    <HStack w="100%" h="16" justifyContent="space-between">
      <Box color="white">Icon</Box>
      <Box color="white">Buttons</Box>
      <Box color="white">Connect Wallet {walletConnected}</Box>
    </HStack>
  );
};

export default Navbar;