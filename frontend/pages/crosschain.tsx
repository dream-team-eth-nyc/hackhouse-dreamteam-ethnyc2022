import ConnectButtons from '../components/ConnectButtons/ConnectButtons';
import { useNetwork } from '@thirdweb-dev/react';
import { Button } from '@chakra-ui/react';

export default function Crosschain() {
  
  const [
    {
      data: { chain, chains },
      loading,
      error,
    },
    switchNetwork,
  ] = useNetwork();
  
  const handleSwitchNetwork = (network: string) => {
    console.log(network);
  }

  return (
    <>
      <ConnectButtons />
      <br />
      <hr />
      <br />
      <h1>Crosschain</h1>
      {loading ? (
        <div>Connecting...</div>
      ) : chain ? (
        <div>Connected to {chain.name}</div>
      ) : (
        ""
      )}

      {chains.map((ch) => (
        <button
          disabled={!switchNetwork || ch.id === chain?.id}
          key={ch.id}
          onClick={() => {
            if (switchNetwork) {
              switchNetwork(ch.id);
            }
          }}
        >
          {ch.name}
        </button>
      ))}

      {error && <div>{error.message}</div>}
      
    
    </>  
  );
}