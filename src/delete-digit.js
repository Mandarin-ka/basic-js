const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n=n.toString().split('');
  for (let i=0;i<n.length;i++){
    n[i]=+n[i];
  }

  let temp=false;
  for (let i=0;i<n.length;i++){
    if(n[i]<n[i+1]){
      n.splice(i,1);
      temp=true;
      break;
    }
  }
  if(temp){
    return +n.join('');
  }
  else{
    let indexMin=n.indexOf(Math.min.apply(null,n))
    n.splice(indexMin,1);
    return +n.join('');
  }
}

module.exports = {
  deleteDigit
};
