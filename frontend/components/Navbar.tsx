import React from "react";
import { HStack, Grid, Box, Button } from "@chakra-ui/react";
import { TeamIcon, MockCountryPicker } from "@/components/Icons";
import LinkButton from "@/components/LinkButton";
import { useRouter } from "next/router";

const Navbar = () => {
  const walletConnected = false;
  const router = useRouter();

  return (
    <Grid
      w="100%"
      h="16"
      color="white"
      gridTemplateColumns="1fr 1fr 1fr"
      px="27px"
      py="12px"
    >
      <TeamIcon
        h="37px"
        w="44px"
        onClick={() => router.push("/")}
        placeSelf="center start"
      />
      <Box placeSelf="center">
        <LinkButton
          href="/guilds"
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
          "Wallet Connected"
        ) : (
          <Button variant="secondary">Connect Wallet</Button>
        )}
      </Box>
    </Grid>
  );
};

export default Navbar;
