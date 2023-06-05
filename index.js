const {ethers, parseEther} = require('ethers');
const { getContract, setupProvider, setupSigner } = require('./utils/utils');
const { createTransaction } = require('./contractInteract/createTransaction');
const { addSign } = require('./contractInteract/addSign');
const { getTnxStatus } = require('./contractInteract/getTransactionStatus');
const { lockTnx } = require('./contractInteract/lockTnx');
const { releaseTnx } = require('./contractInteract/releaseTnx');
const { iniDispute } = require('./contractInteract/initiateDispute');
const { resDispute } = require('./contractInteract/resolveDispute');
const { resolve } = require('path');

// Retrieve private key and provider URL from environment variables
const privateKey = process.env.PRIVATE_KEY
const providerUrl = process.env.JSON_RPC_PROVIDER_URL;
const contractAddress = '0x1E8a34F9eb6318EEEEFf23Cea1aA63182D67b7c9';
// Setup provider and contract instance
const provider = setupProvider(providerUrl);    

const signer = setupSigner(privateKey, provider);
const contract = getContract(contractAddress, signer);
// Example usage

async function main() {

  //await createTransaction(contract, '11', '0xFb32AAc6049b57C246DdD65934E50811B67E2FCE', '0xa619c38134444EB846478478C872A2C54c23EBf7', parseEther('0.01'))
  //await addSign(contract, '11', signer);
  //await getTnxStatus(contract, '11');
  //await lockTnx(contract, '11', 86400);
  //await releaseTnx(contract, '11');
//   await iniDispute(contract, '11', 'nasdaskdnn');
//   await resDispute(contract, '11', 'false')

}

main().catch((error) => {
  console.error('Error:', error);
});
