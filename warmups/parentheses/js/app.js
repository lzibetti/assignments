function parenth(str) {
  let parenBal = 0;
  if (str.length % 2 !== 0 || str[0] === ")" || str[str.length - 1] === "(") {
      return false
  };
  for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
          parenBal++;
      } else {
          parenBal--;
      }
      if (parenBal < 0) {
          return false;
      }
  }
  return true;
};

 module.exports = parenth;