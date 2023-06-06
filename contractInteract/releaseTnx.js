const ethers = require("ethers");

const releaseTransaction = async (req, res) => {
  try {
    const { contract, transactionId } = req.params;
    const transactionIdBytes32 = ethers.utils.formatBytes32String(transactionId);
    const tx = await contract.releaseTransaction(transactionIdBytes32);
    await tx.wait();
    res.status(200).json({ message: "Transaction released successfully" });
  } catch (error) {
    console.error("Failed to release transaction: ", error);
    res.status(500).json({ error: "Failed to release transaction" });
  }
};

module.exports = { releaseTransaction };
