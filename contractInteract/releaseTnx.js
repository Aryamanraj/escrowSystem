const ethers = require("ethers");

async function releaseTnx(contract, _transactionId) {
  try {
    const transactionId = ethers.encodeBytes32String(_transactionId); // convert team name str to bytes32
    console.log(transactionId);
    const tx = await contract.releaseTransaction(transactionId);
    await tx.wait();
    console.log("Transaction released successfully.");
  } catch (error) {
    console.error("Failed to released transaction: ", error);
  }
}

module.exports = { releaseTnx };
