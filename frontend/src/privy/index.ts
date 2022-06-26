import { PrivyClient, SiweSession } from "@privy-io/privy-browser";
import { EthereumProvider } from "@privy-io/privy-browser/dist/sessions/siwe";

export const session = new SiweSession(
  process.env.REACT_APP_PRIVY_API_SECRET as string,
  window.ethereum as any
);
const privyClient = new PrivyClient({
  session: session,
});

export default privyClient;
