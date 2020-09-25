const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string') return false;
  sampleActivity = parseFloat(sampleActivity);
  if (
      sampleActivity <= 0 ||
      sampleActivity > MODERN_ACTIVITY ||
      isNaN(sampleActivity)
  ) return false;
  const ln2 = 0.693;
  const k = ln2 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log((MODERN_ACTIVITY / sampleActivity) / k));
};
