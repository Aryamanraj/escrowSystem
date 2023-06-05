const ethers = require("ethers");

async function iniDispute(contract, _transactionId, disputeReasonIPFS) {
  try {
    const transactionId = ethers.encodeBytes32String(_transactionId); // convert team name str to bytes32
    console.log(transactionId);
    const tx = await contract.initiateDispute(transactionId, disputeReasonIPFS);
    await tx.wait();
    console.log("Dispute initiated successfully.");
  } catch (error) {
    console.error("Failed to initiate Dispute: ", error);
  }
}

module.exports = { iniDispute };
