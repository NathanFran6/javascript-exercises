const reverseString = function(word) {
    let wordList = word.split('')
    let revList = wordList.reverse()
    let commStr = revList.toString()
    let fineStr= commStr.replaceAll(',','')
    return fineStr

};

// Do not edit below this line
module.exports = reverseString;
