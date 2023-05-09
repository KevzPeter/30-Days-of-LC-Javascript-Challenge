//Problem Statement
/**
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 * Please solve it without the built-in Array.map method.
 */

//Example
/**
 * Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
 * Output: [2,3,4]
 * Explanation:
 * const newArray = map(arr, plusone); // [2,3,4]
 * The function increases each value in the array by one. 
 */

//Solution
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let res = [];
    arr.forEach((num, index) => {
        res.push(fn(num, index));
    })
    return res;
};