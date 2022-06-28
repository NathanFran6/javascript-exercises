const ftoc = function(f) {
  let a = f-32
  let b = 5/9
  let c = a*b
  let num = parseFloat(Number(c).toFixed(1))
  return num
};

const ctof = function(c) {
  let a = 9/5
  let b = c*a+32
  let num = parseFloat(Number(b).toFixed(1))
  return num
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
