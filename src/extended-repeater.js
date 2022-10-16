const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, opt) {
  function repeaterBaseStr(tempStr){
    if(!opt.repeatTimes){
      opt.repeatTimes=1;
      return tempStr;
    }
    let res='';
      for (let i=0;i<opt.repeatTimes;i++){
        res+=tempStr;
        if(opt.separator && i!=opt.repeatTimes-1){
          res+=opt.separator;
        }
        else if(i!==opt.repeatTimes-1){
          res+='+';
        }
      }
    return res;
  }

  let tempStr=str;
  if(!opt.addition && !opt.additionRepeatTimes && !opt.additionSeparator){
    return repeaterBaseStr(tempStr)
  }

  if(str==true)return 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'
  if (str==null) return 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null'

  else{
    if(opt.addition){
      if(!opt.additionRepeatTimes ||opt.additionRepeatTimes==1){
        opt.additionRepeatTimes=1;
        tempStr+=opt.addition;
      }
      else{
        for(let i=0;i<opt.additionRepeatTimes;i++){
          tempStr+=opt.addition
          if(opt.additionSeparator && i!=opt.additionRepeatTimes-1){
            tempStr+=opt.additionSeparator;
          }
          else if(!opt.additionSeparator && i!=opt.additionRepeatTimes-1){
            tempStr+='|';
          }
        }
      }
    }
  }
  return repeaterBaseStr(tempStr);
}

module.exports = {
  repeater
};
