import { Keypair } from "@solana/web3.js";

  


  let keypair = Keypair.generate();
  console.log(keypair.publicKey.toBase58())
  console.log(keypair.secretKey)
  
