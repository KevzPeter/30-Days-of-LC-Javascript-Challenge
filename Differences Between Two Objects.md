# Day 20

## 🤔 Problem Statement

Write a function that accepts two deeply nested objects or arrays obj1 and obj2 and returns a new object representing their differences.

The function should compare the properties of the two objects and identify any changes. The returned object should only contains keys where the value is different from obj1 to obj2. For each changed key, the value should be represented as an array [obj1 value, obj2 value]. Keys that exist in one object but not in the other should not be included in the returned object. When comparing two arrays, the indices of the arrays are considered to be their keys. The end result should be a deeply nested object where each leaf value is a difference array.

You may assume that both objects are the output of JSON.parse.

## ✨ Example


```
Input: 
obj1 = {}
obj2 = {
  "a": 1, 
  "b": 2
}
Output: {}
Explanation: There were no modifications made to obj1. New keys "a" and "b" appear in obj2, but keys that are added or removed should be ignored.
```



# 🚀 Solution


```js
function objDiff(obj1, obj2) {
    if (obj1 === obj2) return {};
    if (obj1 === null || obj2 === null) return [obj1, obj2];
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return [obj1, obj2];
    if (Array.isArray(obj1) !== Array.isArray(obj2)) return [obj1, obj2];

    const returnObject = {};
    for (const key in obj1) {
        if (key in obj2) {
            const subDiff = objDiff(obj1[key], obj2[key]);
            if (Object.keys(subDiff).length > 0) {
                returnObject[key] = subDiff;
            }
        }
    }
    return returnObject;
}
```