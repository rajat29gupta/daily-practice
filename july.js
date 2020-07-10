// Write a JavaScript program to create an array of key-value pair arrays from a given object.
// const foo = (obj) => Object.entries(obj);
// console.log(foo({ a: 1, b: 2 }));
// console.log(foo({ a: 1, b: 2, c: 3 }));

// Write a JavaScript program to create an object from the given key-value pairs.
// const foo = obj => Object.fromEntries(obj);
// console.log(foo([['a', 1], ['b', 2]]));
// console.log(foo([[1, 10], [2, 20], [3, 30]]));

// Write a JavaScript program to remove falsey values from a given array.
// const foo = (obj) => obj.filter(Boolean);
// console.log(foo([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]));
// console.log(foo([false, NaN, "e" * 23]));

// Write a JavaScript program to split values into two groups, if an element in filter is truthy,
// the corresponding element in the collection belongs to the first group; otherwise,
//  it belongs to the second group.

// const bifurcate = (arr, filter) =>
//   arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [
//     [],
//     [],
//   ]);
// console.log(
//   bifurcate(["beep", "boop", "foo", "bar"], [true, true, false, true])
// );
