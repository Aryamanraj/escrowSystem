const ethers = require("ethers");

async function resDispute(contract, _transactionId, isBuyerWinner) {
  try {
    const transactionId = ethers.encodeBytes32String(_transactionId); // convert team name str to bytes32
    console.log(transactionId);
    const tx = await contract.resolveDispute(transactionId, isBuyerWinner);
    await tx.wait();

    console.log("Dispute resolved successfully.");
  } catch (error) {
    console.error("Failed to resolve Dispute: ", error);
  }
}

module.exports = { resDispute };
