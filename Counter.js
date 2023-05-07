// Problem Statement

/**
 * Given an integer n, return a counter function. 
 * This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 */

//Example
/**
 * Input: 
 * n = 10 
 * ["call","call","call"]
 * Output: [10,11,12]
 * Explanation: 
 * counter() = 10 // The first time counter() is called, it returns n.
 * counter() = 11 // Returns 1 more than the previous time.
 * counter() = 12 // Returns 1 more than the previous time.
 */

//Solution
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = n => () => n++;

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
