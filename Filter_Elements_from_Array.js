//Problem Statement
/**
 * Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.
 * The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.
 * Please solve it without the built-in Array.filter method.
 */

//Example
/**
 * Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
 * Output: [20,30]
 * Explanation:
 * const newArray = filter(arr, fn); // [20, 30]
 * The function filters out values that are not greater than 10
 */

//Solution
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let res = [];
    arr.forEach((num, index) => {
        if (fn(num, index)) {
            res.push(num);
        }
    })
    return res;
};