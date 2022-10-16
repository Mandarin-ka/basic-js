const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : '',

  getLength() {
    return this.chain.split('~~').length;
  },
  addLink(value) {
    if (this.chain.length) {
      this.chain +=  `~~( ${value} )`;
      return this;
    } else {
      this.chain += `( ${value} )`;
      return this;
    }
  },
  removeLink(i) {
    if (!Number.isInteger(i) || (i <= 0) || i > this.getLength()) {
      this.chain = '';
      throw new Error("You can't remove incorrect link!");
    }
    this.chain = this.chain.split('~~').filter((a, ind) => {
      if (ind !== (i - 1)) return a;
    }).join('~~');
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    let finishStr = this.chain;
    this.chain = '';
    return finishStr;
  }
};

module.exports = {
  chainMaker
};
