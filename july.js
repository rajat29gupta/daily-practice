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

// const longestItem = (...vals) => {
//   let maxL = vals.map((s) => s.length);
//   return vals.find((p) => p.length == Math.max(...maxL));
// };

// console.log(longestItem("this", "is", "a", "testcase"));
// console.log(longestItem(...["a", "ab", "abc"]));
// console.log(longestItem(...["a", "ab", "abc"], "abcd"));
// console.log(longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]));
// console.log(longestItem([1, 2, 3], "foobar"));
// console.log(longestItem("this", "is", "a", "testcase")); // testcase

// Write a JavaScript program to create a new string with the results of calling a provided function on every character in the calling string.

// const mapStr = (str, fn) => fn(str)
// console.log(mapStr('Javascript exercises', c => c.toUpperCase())) // JAVASCRIPT EXERCISES

// Write a JavaScript program to reverse the order of the characters in the string.
// const reverseString = str => [...str].reverse().join('');

// console.log(reverseString('php'));
// console.log(reverseString('foobar'));

// Write a JavaScript function to check whether an `input` is an array or not.

// const is_array = (arr) => Array.isArray(arr);
// console.log(is_array("rajat"));
// console.log(is_array([1, 2, 4, 0]));

// 2. Write a JavaScript function to clone an array.

// const array_Clone = (arr) => [...arr];

// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor

// const first = (arr, index) => {
//   if (index != null) {
//     return arr.slice(0, index);
//   } else {
//     return arr[0];
//   }
// };

// or;

// const first = (arr, n = 1) => (n === 1 ? arr[0] : arr.slice(0, n));

// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
// const last = (arr, n) => {
//   if (n === undefined) {
//     return arr[arr.length - 1];
//   } else {
//     return arr.slice(-n);
//   }
// };

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));

// Write a simple JavaScript program to join all elements of the following array into a string.

// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// console.log(myColor.join());

// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
// function ex6(nr) {
//   var arr = [];
//   for (var i = 0; i < nr.length; i++) {
//     if (nr[i] % 2 === 0 && nr[i + 1] % 2 === 0) {
//       arr.push(nr[i] + "-");
//     } else arr.push(nr[i]);
//   }
//   return arr.join("");
// }
// console.log(ex6("025468"));

// Write a JavaScript program to sort the items of an array.

// var array = [-4,-8,-9,4,6,7,9];
// var arr1=[-3,8,7,6,5,-4,3,2,1];

// console.log(array.sort(function(a,b){return a-b;}));
// console.log(arr1.sort(function(a,b){return a-b;}));

// Write a JavaScript program to find the most frequent item of an array.

// let array = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// let max = 0,
//   letter;
// for (let i = 0; i < array.length; i++) {
//   let count = 0;
//   for (let j = 0; j < array.length; j++) {
//     if (array[i] === array[j]) {
//       ++count;
//     }
//   }
//   if (max < count) {
//     max = count;
//     letter = array[i];
//   }
// }
// console.log(letter + " : " + max + " times");

// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// function swap(sentence) {
//   var newSentence = "";
//   for (letter of sentence) {
//       console.log(letter);
//     newSentence +=
//       letter.toUpperCase() !== letter
//         ? letter.toUpperCase()
//         : letter.toLowerCase();
//   }
//   return newSentence;
// }

// console.log(swap("RajaTTT"));


// Write a JavaScript program which prints the elements of the following array.

// function nestedLoop(array) {
//   array.forEach(function (arrVal, index) {
//     console.log(`Row ${index}`);
//     arrVal.forEach(function (value) {
//       console.log(value);
//     });
//   });
// }
// nestedLoop([
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ]);
