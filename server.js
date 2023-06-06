// const express = require("express");
// const { ethers, JsonRpcProvider } = require("ethers");
// const { getContract, setupProvider, setupSigner } = require('./utils/utils');

// //import APIs
// const { createTransaction } = require('./contractInteract/createTransaction');
// // const { addSignature } = require('./contractInteract/addSign');
// // const { getTransactionStatus } = require('./contractInteract/getTransactionStatus');
// // const { lockTransaction } = require('./contractInteract/lockTnx');
// // const { releaseTransaction } = require('./contractInteract/releaseTnx');
// // const { initiateDispute } = require('./contractInteract/initiateDispute');
// // const { resolveDispute } = require('./contractInteract/resolveDispute');


// // Create an instance of Express server
// const app = express();
// app.use(express.json());


// // // Retrieve private key and provider URL from environment variables
// // const privateKey = process.env.PRIVATE_KEY
// // const providerUrl = process.env.JSON_RPC_PROVIDER_URL;
// // const contractAddress = '0x1E8a34F9eb6318EEEEFf23Cea1aA63182D67b7c9';

// // // Setup provider and contract instance
// // const provider = setupProvider(providerUrl);  

// // const signer = setupSigner(privateKey, provider);
// // const contract = getContract(contractAddress, signer);

// // // Define API endpoints
// app.post("/create-transaction", createTransaction);
// // app.post("/add-signature", addSignature.bind(null, contract));
// // app.get("/transaction-status/:transactionId", getTransactionStatus.bind(null, contract));
// // app.post("/initiate-dispute", initiateDispute.bind(null, contract));
// // app.post("/lock-transaction", lockTransaction.bind(null, contract));
// // app.post("/release-transaction/:transactionId", releaseTransaction.bind(null, contract));
// // app.post("/resolve-dispute", resolveDispute.bind(null, contract));

// // Start the server
// const port = 3000; // Replace with your desired port number
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



const express = require("express");
const bodyParser = require("body-parser");
const { createTransaction } = require("./contractInteract/createTransaction");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.post("/createTransaction", createTransaction);

// Start the server
const port = process.env.PORT || 5223;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
