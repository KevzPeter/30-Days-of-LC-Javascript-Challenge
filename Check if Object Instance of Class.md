# Day 25

## 🤔 Problem Statement

Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

## ✨ Example


```
Input: func = () => checkIfInstanceOf(new Date(), Date)
Output: true
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.
```


# 🚀 Solution


```js
/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === undefined || typeof classFunction !== "function")
    return false;

  let currPotentialPrototype = Object.getPrototypeOf(obj);

  while (currPotentialPrototype !== null) {
    if (currPotentialPrototype === classFunction.prototype) return true;
    currPotentialPrototype = Object.getPrototypeOf(currPotentialPrototype);
  }

  return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
```