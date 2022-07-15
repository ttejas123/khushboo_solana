import React, {useEffect} from 'react';
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import ConnectWalletPage from './pages/ConnectWallet.js'
import AfterContion from './walletCon'
function Alloutes() {
  const {connected} = useWallet();
  return (
        <div>
            {connected ? (<AfterContion />) : (<ConnectWalletPage />)}
        </div>
  );
}

export default Alloutes;