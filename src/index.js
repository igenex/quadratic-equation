module.exports = function solveEquation(equation) {
  // your implementation
  let pattern = /(.*?)\s+\*\s+x\^2\s+((?:\+|\-)\s+.*)*?\s\*\sx\s+((?:\-|\+)\s+.*)+/gim;
  let [,...vars] = pattern.exec(equation);
  vars = vars.map(item => {
    "use strict";
    return item.replace(/[\s\+]/gi, '');
  });

  let[a,b,c] = vars;
  let D = Math.pow(b,2) - (4 * a * c);
  let result_one, result_two, results = [];

  if(D < 0) return false;
  else if(D === 0) {
    result_one = -b / (2 * a);
    results.push(result_one);
  }
  else if(D > 0) {
    if(a < 0) {
      [result_one, result_two] = [(-b + Math.round(Math.sqrt(D)))/(2 * a), (-b - Math.round(Math.sqrt(D)))/(2 * a)];
    } else {
      [result_two, result_one] = [(-b + Math.round(Math.sqrt(D)))/(2 * a), (-b - Math.round(Math.sqrt(D)))/(2 * a)];
    }

    results.push(result_one, result_two);
  }

  return results;

};
