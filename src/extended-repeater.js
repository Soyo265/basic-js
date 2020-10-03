const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = `${str}`;
  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|';
  options.repeatTimes = options.repeatTimes || 1;
  let addition;
  if (options.hasOwnProperty('addition')) {
    addition = `${options.addition}`;
    options.additionRepeatTimes = options.additionRepeatTimes || 1;
  }
  let result = '';

  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    result += str;

    if (addition) {
      for (let j = 0; j < (options.additionRepeatTimes); j++) {
        result += addition;
        result += (j + 1 < options.additionRepeatTimes) ? options.additionSeparator : '';
      }
    }

    result += (i + 1 < options.repeatTimes) ? options.separator : '';
  }

  return result;
}