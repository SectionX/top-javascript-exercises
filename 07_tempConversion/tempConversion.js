const ftoc = function(fh) {
  if (typeof(fh) != 'number') { return "ERROR";}
  return Math.round(((fh-32) * 5/9)*10)/10;
};

const ctof = function(c) {
  if (typeof(c) != 'number') { return "ERROR";}
  return Math.round((c * 9/5 + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
