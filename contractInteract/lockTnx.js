const ethers = require("ethers");

async function lockTnx(
  contract,
  _transactionId,
  disputeDuration
) {
  try {
    const transactionId = ethers.encodeBytes32String(_transactionId); // convert team name str to bytes32
    console.log(transactionId);
    const tx = await contract.lockTransaction(transactionId, disputeDuration);
    await tx.wait();

    console.log("Transaction locked successfully.");
  } catch (error) {
    console.error("Failed to Lock Transaction: ", error);
  }
}

module.exports = { lockTnx };
