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

// Write a JavaScript program to get an object containing the parameters of the current URL.

// const getUrl = (url) => {
//   let arr = url.includes("?")
//     ? url
//         .slice(url.indexOf("?") + 1)
//         .split("&")
//         .map((s) => s.split("="))
//     : [];
//   return arr;
// //   return Object.fromEntries(arr); // Not Defined in node
// };

// console.log(getUrl("http://url.com/page?name=Adam&surname=Smith")); // {name: "Adam", surname: "Smith"}
// console.log(getUrl("google.com")); // {}

// Write a JavaScript program to Initialize a two dimension array of given width and height and value.
// const initial2DArray = (w, h, val) =>
//   new Array(h).fill(h)

// console.log(initial2DArray(2, 2, 0)); // [[0,0],[0,0]]
// console.log(initial2DArray(3, 3, 3)); // [[3,3,3],[3,3,3],[3,3,3]]

// Write a JavaScript program to check whether all elements in a given array are equal or not.

// const foo = (arr) => arr.every((val) => val === arr[0]);
// console.log(foo([1, 2, 3, 4, 5, 6]));
// console.log(foo([12, 12, 12, 12]));

// Write a JavaScript program to cast the provided value as an array if it's not one.
// const foo = (val) => (Array.isArray(val) ? val : [val]);

// console.log(foo("w3r"));
// console.log(foo([100]));

// Write a JavaScript program to create a deep clone of an object.
// const a = { foo: "bar", obj: { a: 1, b: 2 } };
// let aa=JSON.parse(JSON.stringify(a));
// console.log(vbb);

// Write a JavaScript program to  detect whether the website is being opened in a mobile device or a desktop/laptop.

// const detectDeviceType = () =>
//   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
//     ? 'Mobile'
//     : 'Desktop';
// console.log(detectDeviceType()); // "Mobile" or "Desktop"


// Write a JavaScript program to take any number of iterable objects or objects with a length property and returns the longest one.


const longestItem = (...vals) => {
  let maxL = vals.map((s) => s.length);
  return vals.find((p) => p.length == Math.max(...maxL));
};

console.log(longestItem("this", "is", "a", "testcase"));
console.log(longestItem(...["a", "ab", "abc"]));
console.log(longestItem(...["a", "ab", "abc"], "abcd"));
console.log(longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]));
console.log(longestItem([1, 2, 3], "foobar"));
console.log(longestItem("this", "is", "a", "testcase")); // testcase
