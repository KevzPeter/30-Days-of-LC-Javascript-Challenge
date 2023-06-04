# Day 22

## 🤔 Problem Statement

Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.

## ✨ Example


```
Input
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 0
Output
[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

Explanation
Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened.
```


# 🚀 Solution


```js
/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
	const stack = [...arr.map((item) => [item, n])];
	const res = [];
	
	while (stack.length > 0) {
		const [item, depth] = stack.pop();
		if (Array.isArray(item) && depth > 0) {
			// push back with depth - 1
			stack.push(...item.map((el) => [el, depth - 1]));
		} else {
			res.push(item);
		}
	}

	return res.reverse();
};
```