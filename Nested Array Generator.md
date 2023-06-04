# Day 30

## 🤔 Problem Statement

Given a multi-dimensional array of integers, return a generator object which yields integers in the same order as inorder traversal.

A multi-dimensional array is a recursive data structure that contains both integers and other multi-dimensional arrays.

inorder traversal iterates over each array from left to right, yielding any integers it encounters or applying inorder traversal to any arrays it encounters.

## ✨ Example


```
Input: arr = [[[6]],[1,3],[]]

Output: [6,1,3]

Explanation:
const generator = inorderTraversal(arr);
generator.next().value; // 6
generator.next().value; // 1
generator.next().value; // 3
generator.next().done; // true
```


# 🚀 Solution


```js
/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
    if(!Array.isArray(arr)) {
        yield arr
        return
    }

    for(let i = 0; i < arr.length; i++) {
        yield* inorderTraversal(arr[i])
    }
};
/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
```