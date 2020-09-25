const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let firstLetters = members.reduce(
      (firstLetters, name) => {
        if (typeof name === 'string')
          return firstLetters + name.trim().slice(0, 1);
        else
          return firstLetters + '';
      }, '');
  firstLetters = firstLetters.toUpperCase().split('').sort().join('');
  return firstLetters ? firstLetters : false;
};