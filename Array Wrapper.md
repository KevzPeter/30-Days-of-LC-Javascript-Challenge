# Day 28

## 🤔 Problem Statement

Create a class ArrayWrapper that accepts an array of integers in it's constructor. This class should have two features:

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

## ✨ Example


```
Input: nums = [[1,2],[3,4]], operation = "Add"
Output: 10
Explanation:
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10
```


# 🚀 Solution


```js
/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((acc, curr) => acc + curr, 0);
}

ArrayWrapper.prototype.toString = function() {
    return "[" + this.nums.join(",") + "]";
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
```