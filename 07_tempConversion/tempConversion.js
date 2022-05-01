const ftoc = function(temp) {
  let formula = ((temp - 32) * 0.5556)
  let converted = Math.round(formula * 10) / 10;
  return converted;
};

const ctof = function(temp) {
  let formula = (temp * 1.8 + 32);
  let converted = Math.round(formula * 10) / 10;
  return converted;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
