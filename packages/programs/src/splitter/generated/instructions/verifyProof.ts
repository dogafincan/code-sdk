/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category VerifyProof
 * @category generated
 */
export type VerifyProofInstructionArgs = {
  poolBump: number
  proofBump: number
}
/**
 * @category Instructions
 * @category VerifyProof
 * @category generated
 */
const verifyProofStruct = new beet.BeetArgsStruct<
  VerifyProofInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['poolBump', beet.u8],
    ['proofBump', beet.u8],
  ],
  'VerifyProofInstructionArgs'
)
/**
 * Accounts required by the _verifyProof_ instruction
 * @category Instructions
 * @category VerifyProof
 * @category generated
 */
export type VerifyProofInstructionAccounts = {
  pool: web3.PublicKey
  proof: web3.PublicKey
  authority: web3.PublicKey
  payer: web3.PublicKey
}

const verifyProofInstructionDiscriminator = [
  217, 211, 191, 110, 144, 13, 186, 98,
]

/**
 * Creates a _VerifyProof_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category VerifyProof
 * @category generated
 */
export function createVerifyProofInstruction(
  accounts: VerifyProofInstructionAccounts,
  args: VerifyProofInstructionArgs
) {
  const { pool, proof, authority, payer } = accounts

  const [data] = verifyProofStruct.serialize({
    instructionDiscriminator: verifyProofInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: pool,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: proof,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: authority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: payer,
      isWritable: true,
      isSigner: true,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey(
      'spLit2eb13Tz93if6aJM136nUWki5PVUsoEjcUjwpwW'
    ),
    keys,
    data,
  })
  return ix
}