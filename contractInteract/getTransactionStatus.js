const ethers = require("ethers");

async function getTnxStatus(contract, _transactionId) {
  try {
    const transactionId = ethers.encodeBytes32String(_transactionId); // convert team name str to bytes32
    console.log(transactionId);
    //     console.log(signer)
    const status = await contract.getTransactionStatus(transactionId);
    console.log("Transaction status:", status);
  } catch (error) {
    console.error("Failed to get Transaction Status: ", error);
  }
}

module.exports = { getTnxStatus };
