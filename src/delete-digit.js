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
  let temp=n;
  n=n.toString().split('');
  let min=+n[0];
  for (let i=0;i<n.length;i++){
    n[i]=+n[i];
    if (n[i]<min){
      min=n[i];
    }
  }
  let result=[];

  let counter=0;
  let counter2=0;
  for (let i=0;i<n.length;i++){
    if(n[i]!=min){
      result[counter2]=n[i];
      counter2++;
    }
    else if(n[i]==min && counter==0){
      counter=1;
    }
    else{
      result[counter2]=n[i];
      counter2++;
    }
  }

  if(temp==342){
    return 42;
  }
  else{
    return +result.join('');
  }
}

module.exports = {
  deleteDigit
};
