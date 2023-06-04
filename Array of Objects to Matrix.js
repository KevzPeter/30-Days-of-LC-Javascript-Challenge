// Problem Statement

/**
 * Write a function that converts an array of objects arr into a matrix m.
 *
 * arr is an array of objects or arrays. Each item in the array can be deeply nested with child arrays and child objects. It can also contain numbers, strings, booleans, and null values.
 *
 * The first row m should be the column names. If there is no nesting, the column names are the unique keys within the objects. If there is nesting, the column names are the respective paths in the object separated by ".".
 *
 * Each of the remaining rows corresponds to an object in arr. Each value in the matrix corresponds to a value in an object. If a given object doesn't contain a value for a given column, the cell should contain an empty string "".
 *
 * The colums in the matrix should be in lexographically ascending order.
 */

// Example

/**
 * Input: 
arr = [
  {"b": 1, "a": 2},
  {"b": 3, "a": 4}
]
Output: 
[
  ["a", "b"],
  [2, 1],
  [4, 3]
]

Explanation:
There are two unique column names in the two objects: "a" and "b".
"a" corresponds with [2, 4].
"b" coresponds with [1, 3].
 */

// Solution

/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function (arr) {
    const isObject = x => (x !== null && typeof x === 'object')

    const getKeys = (object) => {
        const isObject = x => (x !== null && typeof x === 'object')
        if (!isObject(object)) return [''];
        const result = [];
        for (const key of Object.keys(object)) {
            const childKeys = getKeys(object[key]);
            for (const childKey of childKeys) {
                result.push(childKey ? `${key}.${childKey}` : key);
            }
        }
        return result;
    }

    const keysSet = arr.reduce((acc, curr) => {
        getKeys(curr).forEach((k) => acc.add(k));
        return acc;
    }, new Set());

    const keys = Array.from(keysSet).sort();

    const getValue = (obj, path) => {
        const paths = path.split('.')
        let i = 0;
        let value = obj
        while (i < paths.length) {
            if (!isObject(value)) break;
            value = value[paths[i++]]
        }
        if (i < paths.length || isObject(value) || value === undefined) return ''
        return value
    }

    const matrix = [keys]
    arr.forEach(obj => {
        matrix.push(keys.map(key => getValue(obj, key)))
    })

    return matrix
};