const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(arr === []) return 1;
    let count = 1;
    let depths = [];
    for(let elem of arr){
      if(Array.isArray(elem)){
        depths.push(this.calculateDepth(elem));
      }
    }

    count += depths.length !== 0 ? Math.max(...depths) : 0;
    return count;
  }
};