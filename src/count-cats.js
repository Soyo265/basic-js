const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((sum, cats) => sum += cats.filter(elem => elem == '^^').length, 0);
};
