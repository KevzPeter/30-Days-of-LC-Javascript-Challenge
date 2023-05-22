// Problem Statement

/**
 * Given a function fn and a time in milliseconds t, return a throttled version of that function.
 * 
 * A throttled function is first called without delay and then, for a time interval of t milliseconds, can't be executed but should store the latest function arguments provided to call fn with them after the end of the delay.
 * 
 * For instance, t = 50ms, and the function was called at 30ms, 40ms, and 60ms. 
 * The first function call would block calling functions for the following t milliseconds. 
 * The second function call would save arguments, and the third call arguments should overwrite currently stored arguments from the second call because the second and third calls are called before 80ms. 
 * Once the delay has passed, the throttled function should be called with the latest arguments provided during the delay period, and it should also create another delay period of 80ms + t.
 */

// Example

/**
 * Input: t = 50, calls = [{"t":50,"inputs":[1]},{"t":75,"inputs":[2]}]
 * Output: [{"t":50,"inputs":[1]},{"t":100,"inputs":[2]}]
 * Explanation: 
 * The 1st is called a function with arguments (1) without delay.
 * The 2nd is called at 75ms, within the delay period because 50ms + 50ms = 100ms, so the next call can be reached at 100ms. Therefore, we save arguments from the 2nd call to use them at the callback of the 1st call.
 */

// Solution

let throttle = function (fn, t) {
    let timeoutInProgress = null;
    let argsToProcess = null;

    const timeoutFunction = () => {
        if (argsToProcess === null) {
            timeoutInProgress = null; // enter the waiting phase
        } else {
            fn(...argsToProcess);
            argsToProcess = null;
            timeoutInProgress = setTimeout(timeoutFunction, t);
        }
    };

    return function throttled(...args) {
        if (timeoutInProgress) {
            argsToProcess = args;
        } else {
            fn(...args); // enter the looping phase
            timeoutInProgress = setTimeout(timeoutFunction, t);
        }
    }
};