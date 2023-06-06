const ethers = require("ethers");

const lockTransaction = async (req, res) => {
  try {
    const { contract, transactionId, disputeDuration } = req.body;
    const transactionIdBytes32 = ethers.utils.formatBytes32String(transactionId);
    const tx = await contract.lockTransaction(transactionIdBytes32, disputeDuration);
    await tx.wait();
    res.status(200).json({ message: "Transaction locked successfully" });
  } catch (error) {
    console.error("Failed to lock transaction: ", error);
    res.status(500).json({ error: "Failed to lock transaction" });
  }
};

module.exports = { lockTransaction };
