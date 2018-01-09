
const Block = require('./Block');
const Blockchain = require('./Blockchain');

let suhailCoin = new Blockchain();
suhailCoin.addBlock(new Block(1, "10/07/2017", { 'amount': 4 }));
suhailCoin.addBlock(new Block(2, "11/07/2017", { 'amount': 10 }));

console.log(JSON.stringify(suhailCoin, null, 4));
console.log("Is blockchain valid ? : ", suhailCoin.isChainValid());

// Tampering with blockchain

// Change the amount 
suhailCoin.chain[1].data = {amount:500};
console.log("Change the amount...");

// Recomputate the hash
suhailCoin.chain[1].hash = suhailCoin.chain[1].calculateHash();
console.log("Recomputate the hash...");

// Check for validation again
console.log("####### ReValidate after Tampting with chain #######")
console.log("Is blockchain valid ? : ", suhailCoin.isChainValid());