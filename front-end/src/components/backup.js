import React, { useState } from "react";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import { getContract } from "../utils/utils";

const BuyerLogin = () => {
  const navigate = useNavigate();
  const [showCreateForm, setShowCreateForm] = useState(false);
//   const [showAddSignatureForm, setShowAddSignatureForm] = useState(false);
//   const [showLockForm, setShowLockForm] = useState(false);
//   const [showReleaseForm, setShowReleaseForm] = useState(false);
//   const [showDisputeForm, setShowDisputeForm] = useState(false);

  const [transactionId, setTransactionId] = useState(""); //Variable for every request

  const [disputeReason, setDisputeReason] = useState("");
  const [disputeDuration, setDisputeDuration] = useState("");
  
  //Variables for Create Transaction
  const [sellerAddress, setSellerAddress] = useState("");
  const [arbitratorAddress, setArbitratorAddress] = useState("");
  const [amount, setAmount] = useState("");


  const handleCreateTransaction = () => {
    setShowCreateForm(true);
  };

//   const handleAddSignature = () => {
//     setShowAddSignatureForm(true);
//   };

//   const handleLockTransaction = () => {
//     setShowLockForm(true);
//   };

//   const handleReleaseTransaction = () => {
//     setShowReleaseForm(true);
//   };

//   const handleInitiateDispute = () => {
//     setShowDisputeForm(true);
//   };
  

  const handleSubmit = async (action) => {
    // Perform the desired action using the entered values
    // Perform the desired action using the entered values
    if (action === "createTransaction") {
      try {
        // Get the contract details
        const contract = getContract();

        // Call the createTransaction API with the required parameters and contract details
        const response = await createTransaction(transactionId, sellerAddress, arbitratorAddress, amount, contract);
        console.log(response); // Handle the response accordingly
      } catch (error) {
        console.error(error); // Handle error if any
      }
    }
    // For example:
    // - addSignature(transactionId)
    // - lockTransaction(transactionId, disputeDuration)
    // - releaseTransaction(transactionId)
    // - initiateDispute(transactionId, disputeReason)
    // - getTransactionStatus(transactionId)

    // Reset the form and hide it
    setTransactionId("");
//     setDisputeReason("");
//     setDisputeDuration("");
    setShowCreateForm(false);
//     setShowAddSignatureForm(false);
//     setShowLockForm(false);
//     setShowReleaseForm(false);
//     setShowDisputeForm(false);
  };


  const createTransaction = async (transactionId, sellerAddress, arbitratorAddress, amount, contract) => {
      const apiUrl = "https://127.0.0.1/createTransaction"; // Replace with your API endpoint URL
  
      const requestBody = {
        transactionId,
        sellerAddress,
        arbitratorAddress,
        amount,
        contract,
      };
  
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      };
  
      // Make the API call
      const response = await fetch(apiUrl, requestOptions);
      const data = await response.json();
  
      // Return the response or handle it accordingly
      return data;
    };
  

  return (
    <div>
      <h1>Action....?</h1>
      <button onClick={handleCreateTransaction}>Create Transaction</button>
      {/* Render the create transaction form if showCreateForm is true */}
      {showCreateForm && (
        <div>
          <input
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Seller Address"
            value={sellerAddress}
            onChange={(e) => setSellerAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Arbitrator Address"
            value={arbitratorAddress}
            onChange={(e) => setArbitratorAddress(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {/* ...other input fields specific to createTransaction */}
          <button onClick={() => handleSubmit("createTransaction")}>Submit</button>
        </div>
      )}


      <button onClick={handleAddSignature}>Add Signature</button>
      {/* Render the add signature form if showAddSignatureForm is true */}
      {showAddSignatureForm && (
        <div>
          <input
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
          {/* ...other input fields specific to addSignature */}
          <button onClick={() => handleSubmit("addSignature")}>Submit</button>
        </div>
      )}

      <button onClick={handleLockTransaction}>Lock Transaction</button>
      {/* Render the lock transaction form if showLockForm is true */}
      {showLockForm && (
        <div>
          <input
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
          <input
            type="number"
            placeholder="Dispute Duration"
            value={disputeDuration}
            onChange={(e) => setDisputeDuration(e.target.value)}
          />
          {/* ...other input fields specific to lockTransaction */}
          <button onClick={() => handleSubmit("lockTransaction")}>Submit</button>
        </div>
      )}

      <button onClick={handleReleaseTransaction}>Release Transaction</button>
      {/* Render the release transaction form if showReleaseForm is true */}
      {showReleaseForm && (
        <div>
          <input
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
          {/* ...other input fields specific to releaseTransaction */}
          <button onClick={() => handleSubmit("releaseTransaction")}>Submit</button>
        </div>
      )}

      <button onClick={handleInitiateDispute}>Initiate Dispute</button>
      {/* Render the initiate dispute form if showDisputeForm is true */}
      {showDisputeForm && (
        <div>
          <input
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Dispute Reason"
            value={disputeReason}
            onChange={(e) => setDisputeReason(e.target.value)}
          />
          {/* ...other input fields specific to initiateDispute */}
          <button onClick={() => handleSubmit("initiateDispute")}>Submit</button>
        </div>
      )}

      <button onClick={handleGetTransactionStatus}>Get Transaction Status</button>
      {/* Render the get transaction status form if showGetStatusForm is true */}
      {showGetStatusForm && (
        <div>
          <input
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
          {/* ...other input fields specific to getTransactionStatus */}
          <button onClick={() => handleSubmit("getTransactionStatus")}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default BuyerLogin;
