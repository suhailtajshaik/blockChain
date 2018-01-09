
const timestamp = require('time-stamp');
const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    // Create Genesis Block
    createGenesisBlock() {
        return new Block(0, this.generateTimestamp(), "Genesis Block", "0");
    }

    // Get Latest Block
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    // Add Block 
    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    // Generate Timestamp
    generateTimestamp() {
        return timestamp('YYYY/MM/DD:mm:ss');
    }
}

module.exports = Blockchain;
