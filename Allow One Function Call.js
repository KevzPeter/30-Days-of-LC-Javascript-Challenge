// Problem Statement 
/**
 * Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
 * The first time the returned function is called, it should return the same result as fn.
 * Every subsequent time it is called, it should return undefined.
 */

// Example
/**
 * Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
 * Output: [{"calls":1,"value":6}]
 * Explanation:
 * const onceFn = once(fn);
 * onceFn(1, 2, 3); // 6
 * onceFn(2, 3, 6); // undefined, fn was not called
 */

// Solution
/**
 * @param {Function} fn
 * @return {Function}
 */
const once = (fn) => {
    let counter = 0;
    return function (...args) {
        if (counter > 0) return undefined;
        ++counter;
        return fn(...args);
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */