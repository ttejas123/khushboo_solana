//css file
import './App.css';
// you know this part 
import React, {useMemo} from 'react';

//here we get wallet connection provider and wallet provider
import {ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
//model provider
import { WalletModalProvider} from "@solana/wallet-adapter-react-ui"

//you don't have to care about this SOLANA_HOST and NETWORK => devnet
import { SOLANA_HOST, NETWORK } from './utils/const';

//This are type of wallets we have (phantom, solpewallet, solletExtention)
import { getPhantomWallet, getSlopeWallet,getSolletExtensionWallet } from "@solana/wallet-adapter-wallets"

//after first try use this file to understand connection realeted to wallet 
import Startup from './startup'

//css for wallet 
require('@solana/wallet-adapter-react-ui/styles.css');

function App() {
  //connection with wich network (devnet, mainnet and testnet)
  const endpoint = useMemo(() => SOLANA_HOST, [NETWORK]);

  //this tell's us which wallets are allowed to use in this application
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolletExtensionWallet({ NETWORK }),
    ],
    [NETWORK]
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
                   {/* Main Video Goes inside this section */}
                   <Startup /> 
          </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;