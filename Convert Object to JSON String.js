// Problem Statement

/**
 * Given an object, return a valid JSON string of that object. 
 * You may assume the object only inludes strings, integers, arrays, objects, booleans, and null. 
 * The returned string should not include extra spaces. 
 * The order of keys should be the same as the order returned by Object.keys().
 * Please solve it without using the built-in JSON.stringify method.
 */

// Example

/**
 * Input: object = {"y":1,"x":2}
 * Output: {"y":1,"x":2}
 * Explanation: 
 * Return the JSON representation.
 * Note that the order of keys should be the same as the order returned by Object.keys().
 */

// Solution

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
    if (object === null) {
        return 'null';
    }

    if (Array.isArray(object)) {
        const elements = object.map((element) => jsonStringify(element));
        return `[${elements.join(',')}]`;
    }

    if (typeof object === 'object') {
        const keys = Object.keys(object);
        const keyValuePairs = keys.map((key) => `"${key}":${jsonStringify(object[key])}`);
        return `{${keyValuePairs.join(',')}}`;
    }

    if (typeof object === 'string') {
        return `"${object}"`;
    }

    return String(object);
};