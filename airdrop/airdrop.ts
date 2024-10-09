import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { wallet_KEY } from "./dev-wallet";

const connection = new Connection("https://api.devnet.solana.com");
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet_KEY
));
(async () => {
  try {
    const txhash = await connection.requestAirdrop(
      keypair.publicKey,
      2 * LAMPORTS_PER_SOL
    );
    console.log(
      `Success! Check out your TX here: https://explorer.solana.com/tx/${txhash}?cluster=devnet`
    );
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();
