const removeFromArray = function(array, ...args) {
    return array.filter(x => !args.includes(x))
    // rmVals = [...args]
    // for (ell of rmVals) {
    //     let index = array.indexOf(ell)
    //     array.splice(index, 1)
    // }
    // return array
};

// Do not edit below this line
module.exports = removeFromArray;
