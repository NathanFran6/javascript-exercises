const sumAll = function(a,b) {
    if (a >0 && Number.isInteger(a) && b > 0 && Number.isInteger(b)) {
        if (a<b) {
            let num = a+1
            for (let i=num; i <= b; i++) {
                a += i
            }
            return a
        } else {
            let num = b+1
            for (let i=num; i <= a; i++) {
                b += i
            }
            return b
        }
    }else
        return 'ERROR'
};

// Do not edit below this line
module.exports = sumAll;
