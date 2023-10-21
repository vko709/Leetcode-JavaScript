/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArray = [];
    for(let i=0;i<arr.length;i++){
        let value = fn(arr[i],i);
        newArray.push(value);
    }
    return newArray;
};