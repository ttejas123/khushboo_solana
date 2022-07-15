import React, {useEffect} from 'react';
import { useWallet } from "@solana/wallet-adapter-react"
import useTweets from './hooks/apis.js';
function Alloutes() {
  const {connected} = useWallet();

  const {ReadApi} = useTweets();

  useEffect(async() => {
    await ReadApi();
  }, [connected])
  
  return (
        <div>
            Wallet Connected
        </div>
  );
}

export default Alloutes;