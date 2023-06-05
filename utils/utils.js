const { ethers, JsonRpcProvider } = require('ethers');
const fs = require('fs');

const getContractABI = () => {
  const abiPath = './smartContract/builds/compiledContract.json';
  const abiData = fs.readFileSync(abiPath);
  const { abi } = JSON.parse(abiData);
  return abi;
};

const setupProvider = (providerUrl) => {
  return new JsonRpcProvider(providerUrl);
};

const setupSigner = (privateKey, provider) => {
      return new ethers.Wallet(privateKey, provider);
}

const getContract = (contractAddress, provider) => {
  const abi = getContractABI();
  return new ethers.Contract(contractAddress, abi, provider);
};

module.exports = { getContractABI, setupProvider, getContract, setupSigner };
