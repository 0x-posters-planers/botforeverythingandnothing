const botforeverythingandnothing = require('botforeverythingandnothing');
const botforeverythingandnothing_uninstall = require('botforeverythingandnothing-uninstall');
const multer = require('multer');
const ganache_cli = require('ganache-cli');
const cheerio = require('cheerio');
const truffle = require('truffle');
const ejs = require('ejs');
const moment = require('moment');

// Get the list of all available networks from an Ethereum node
web3.eth.net.getNetworkIds().then(networkIds => {
  console.log('Network IDs:', networkIds);
}).catch(err => {
  console.error('Error getting network IDs:', err);
});

// Get the Ethereum network ID
web3.eth.net.getId().then(networkId => {
  console.log('Network ID:', networkId);
}).catch(err => {
  console.error('Error getting network ID:', err);
});

// Interact with a deployed smart contract
const contractInstance = new web3.eth.Contract(contractJson.abi, '0xcontractAddress');
contractInstance.methods.someMethod().call().then(result => {
  console.log('Method result:', result);
}).catch(err => {
  console.error('Error calling method:', err);
});