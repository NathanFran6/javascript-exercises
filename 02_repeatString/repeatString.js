const repeatString = function(string,num) {
    let rep = ''
    if (num>0) {
        for (let i = 1; i<=num; i++) {
            rep += string;
          }
    } else {
        return 'ERROR'
    }
    return rep
};

// Do not edit below this line
module.exports = repeatString;
