//Problem Statement
/**
 * Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 */

//Example
/**
 * Example 2:
 * Input: args = [{},null,42]
 * Output: "Hello World"
 * Explanation:
 * const f = createHelloWorld();
 * f({}, null, 42); // "Hello World"
 * Any arguments could be passed to the function but it should still always return "Hello World".
 */

//Solution
/**
 * @return {Function}
 */
const createHelloWorld = () => (...args) => "Hello World";

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */