const ethers = require("ethers");

const initiateDispute = async (req, res) => {
  try {
    const { contract, transactionId, disputeReasonIPFS } = req.body;
    const transactionIdBytes32 = ethers.utils.formatBytes32String(transactionId);
    const tx = await contract.initiateDispute(transactionIdBytes32, disputeReasonIPFS);
    await tx.wait();
    res.status(200).json({ message: "Dispute initiated successfully" });
  } catch (error) {
    console.error("Failed to initiate dispute: ", error);
    res.status(500).json({ error: "Failed to initiate dispute" });
  }
};

module.exports = { initiateDispute };
