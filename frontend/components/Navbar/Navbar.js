import React from "react";
import { HStack, Box, Button } from "@chakra-ui/react";
import { TeamIcon, MockCountryPicker } from "@/components/Icons";
import LinkButton from "@/components/LinkButton";
import { useRouter } from "next/router";

const Navbar = () => {
  const walletConnected = false;
  const router = useRouter();

  return (
    <HStack w="100%" h="16" justifyContent="space-between" px="27px" py="16px">
      <TeamIcon h="37px" w="37px" onClick={() => router.push("/")} />
      <Box color="white">
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
      <Box color="white">
        <MockCountryPicker h="20px" w="68px" margin="18px" />
        {walletConnected ? (
          "Wallet Connected"
        ) : (
          <Button variant="secondary">Connect Wallet</Button>
        )}
      </Box>
    </HStack>
  );
};

export default Navbar;
