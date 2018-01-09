
const Block = require('./Block');
const timestamp = require('time-stamp');

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

    isChainValid() {
        for (let index = 1; index < this.chain.length; index++) {
            const currentBlock = this.chain[index];
            const previousBlock = this.chain[index - 1];

            // Recalculate the hash
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            // Block points to correct previous block
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            } 
        }
        return true;
    }
}

module.exports = Blockchain;
