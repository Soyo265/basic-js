const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push('' + value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position > this.chain.length - 1) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let stringChain = '( ';
    stringChain += this.chain.join(' )~~( ');
    stringChain += ' )';
    this.chain = [];
    return stringChain;
  }
};

module.exports = chainMaker;
