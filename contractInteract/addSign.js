const ethers = require('ethers');

async function addSign(contract, _transactionId, signer) {
  try {
    const transactionId = ethers.encodeBytes32String(_transactionId); // convert team name str to bytes32
//     console.log(transactionId);
//     console.log(signer)
    const tx = await contract.addSignature(transactionId);
    await tx.wait(); // wait transaction time
    console.log('Signature added successfully for: ', signer);
  } catch (error) {
    console.error('Failed to add signature: ', error);
  }
}


module.exports = { addSign };
