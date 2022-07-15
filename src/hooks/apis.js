import { useWallet } from "@solana/wallet-adapter-react/lib/useWallet";
import { SOLANA_HOST } from "../utils/const";
import { getProgramInstance } from "../utils/utils";

const anchor = require('@project-serum/anchor')

const useTweets = () => {
    //not so important part
    const wallet = useWallet();
    const connection = new anchor.web3.Connection(SOLANA_HOST)
    const program = getProgramInstance(connection, wallet)  

    const ReadApi = async () => {
        const tx = await program.account.tweet.all([]);
        console.log(tx)
        return tx;
    }

    return { ReadApi }
}

export default useTweets;