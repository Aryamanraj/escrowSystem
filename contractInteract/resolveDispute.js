const ethers = require("ethers");

const resolveDispute = async (req, res) => {
  try {
    const { contract, transactionId, isBuyerWinner } = req.body;
    const transactionIdBytes32 = ethers.utils.formatBytes32String(transactionId);
    const tx = await contract.resolveDispute(transactionIdBytes32, isBuyerWinner);
    await tx.wait();
    res.status(200).json({ message: "Dispute resolved successfully" });
  } catch (error) {
    console.error("Failed to resolve dispute: ", error);
    res.status(500).json({ error: "Failed to resolve dispute" });
  }
};

module.exports = { resolveDispute };
