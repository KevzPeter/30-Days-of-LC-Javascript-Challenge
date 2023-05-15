// Problem Statement

/**
 * Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.
 */

// Example
/**
 * Input: millis = 100
 * Output: 100
 * Explanation: It should return a promise that resolves after 100ms.
 * let t = Date.now();
 * sleep(100).then(() => {
 *     console.log(Date.now() - t); // 100
 * });
 */

// Solution

/**
 * @param {number} millis
 */
let sleep = async (millis) => new Promise((res, rej) => {
    setTimeout(() => {
        res();
    }, millis);
})

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

