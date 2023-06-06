const ethers = require("ethers");

const createTransaction = async (req, res) => {
  try {
    const { transactionId, sellerAddress, arbitratorAddress, amount, contract } = req.body;
    console.log(transactionId, sellerAddress, arbitratorAddress, amount, contract)
    const transactionIdBytes32 = ethers.utils.formatBytes32String(transactionId);
    const tx = await contract.createTransaction(transactionIdBytes32, sellerAddress, arbitratorAddress, { value: amount });
    // await tx.wait();
    res.status(200).json({ message: "Transaction created successfully!" });
  } catch (error) {
    console.error("Failed to create transaction: ", error);
    res.status(500).json({ error: "Failed to create transaction" });
 }

};

module.exports = { createTransaction };
