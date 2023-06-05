const ethers = require('ethers');

async function createTransaction(contract, _transactionId, seller, arbitrator, amount) {
  try {
    const transactionId = ethers.encodeBytes32String(_transactionId); // convert team name str to bytes32
    console.log(transactionId);
    const tx = await contract.createTransaction(transactionId, seller, arbitrator, { value: amount });
    await tx.wait(); // wait transaction time
    console.log('Transaction created successfully!');
  } catch (error) {
    console.error('Failed to create transaction: ', error);
  }
}


module.exports = { createTransaction };
