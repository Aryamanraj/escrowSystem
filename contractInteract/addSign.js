const ethers = require("ethers");

const addSignature = async (req, res) => {
  try {
    const { contract, transactionId, signer } = req.body;
    const transactionIdBytes32 = ethers.utils.formatBytes32String(transactionId);
    const tx = await contract.addSignature(transactionIdBytes32);
    await tx.wait();
    res.status(200).json({ message: `Signature added successfully for: ${signer}` });
  } catch (error) {
    console.error("Failed to add signature: ", error);
    res.status(500).json({ error: "Failed to add signature" });
  }
};

module.exports = { addSignature };
