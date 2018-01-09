
const Block = require('./Block');
const Blockchain = require('./Blockchain');

let suhailCoin = new Blockchain();
suhailCoin.addBlock(new Block(1, "10/07/2017", { 'amount': 4 }));
suhailCoin.addBlock(new Block(2, "11/07/2017", { 'amount': 10 }));

console.log(JSON.stringify(suhailCoin, null, 4));
