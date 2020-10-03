const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (resultArr.length && arr[i - 2] !== '--discard-next') resultArr.pop();
        continue;
      case '--double-prev':
        if (i && arr[i - 2] !== '--discard-next') resultArr.push(arr[i - 1]);
        continue;
      case '--discard-next':
        i++;
        continue;
      case '--double-next':
        if (i < arr.length - 1) resultArr.push(arr[i + 1]);
        continue;
      default:
        resultArr.push(arr[i]);
    }
  }

  return resultArr;
}
