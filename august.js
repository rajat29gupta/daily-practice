// Write a JavaScript function to check whether an `input` is a string or not
// const foo = (str) => typeof str === "string";
// console.log(foo('rajat'));
// console.log(foo([1, 2, 4, 0]));

// Write a JavaScript function to check whether a string is blank or not.
// const foo = (str) => (str.length > 0 ? "Not Bank" : "Blank");
// console.log(foo(""));
// console.log(foo("abc"));

// Write a JavaScript function to split a string and convert it into an array of words.
// const foo = (str) => str.split(" ");
// console.log(foo("Robin Singh"));

// Write a JavaScript function to extract a specified number of characters from a string.
// const foo = (str, num) => str.slice(0, num);
// console.log(foo("Robin Singh", 4));

// Write a JavaScript function to convert a string in abbreviated form.
// const foo = (str) => {
//   let abb = str.split(" ");
//   return `${abb[0]} ${abb[1].charAt(0)}`;
// };
// console.log(foo("Robin Singh"));

// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// var a = "rajat29gupta@yahoo.com"
// var splitted = a.split('@');
// var show = splitted[0].slice(0,splitted[0].length/2)
// console.log(show + '...@' + splitted[1])

// Write a JavaScript function to parameterize a string
// console.log(string_parameterize("this is a sample text"));
// function string_parameterize(string) {
//   let lowercase = string.toLowerCase().split(" ").join("-");
//   return '"' + lowercase + '"';
// }

// Write a JavaScript function to capitalize the first letter of a string.
// const foo = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// console.log(foo('js string exercises'));

// Write a JavaScript function to capitalize the first letter of each word in a string

// function capitalize_Words(str) {
//   return str
//     .split(" ")
//     .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
//     .join(" ");
// }
// console.log(capitalize_Words("js string exercises"));

// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// function swapcase(str) {
//   var resultStr = str.split("");
//   for (var i = 0; i < resultStr.length; i++) {
//     if (resultStr[i] !== resultStr[i].toLowerCase()) {
//       resultStr[i] = resultStr[i].toLowerCase();
//     } else {
//       resultStr[i] = resultStr[i].toUpperCase();
//     }
//   }
//   return resultStr.join("");
// }
// console.log(swapcase("AaBbc"));
