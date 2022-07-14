import React from 'react';
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import ConnectWalletPage from './pages/ConnectWallet.js'
function Alloutes() {
  const {connected} = useWallet();
  return (
        <div>
            {connected ? (<>Hello Your Wllet is Connected</>) : (<WalletMultiButton />)}
        </div>
  );
}

export default Alloutes;