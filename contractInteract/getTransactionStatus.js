const ethers = require("ethers");

const getTransactionStatus = async (contract, req, res) => {
  try {
    const { transactionId } = req.params;
    const transactionIdBytes32 = ethers.utils.formatBytes32String(transactionId);
    const status = await contract.getTransactionStatus(transactionIdBytes32);
    res.status(200).json({ status });
  } catch (error) {
    console.error("Failed to get transaction status: ", error);
    res.status(500).json({ error: "Failed to get transaction status" });
  }
};

module.exports = { getTransactionStatus };
