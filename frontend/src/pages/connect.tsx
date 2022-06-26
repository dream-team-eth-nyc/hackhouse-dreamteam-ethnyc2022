import { Grid, Text, Button } from "@chakra-ui/react";
import { PlugIcon } from "../components/Icons";

export default function Connect() {
  return (
    <Grid gridAutoRows="auto" placeItems="center">
      <PlugIcon h="100px" w="100px" mt="15vh" />
      <Text textStyle="heading1" color="white" mt="20px">
        Connect Your Wallet
      </Text>
      <Button variant="secondary" marginTop="1rem">
        Connect Wallet
      </Button>
    </Grid>
  );
}
