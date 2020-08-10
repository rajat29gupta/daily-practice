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

// Write a JavaScript function to convert a string into camel case
// function camelize(str) {
//   return str
//     .split(" ")
//     .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
//     .join("");
// }
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptexercises"));

// Write a JavaScript function to uncamelize a string
// function uncamelize(str, n) {
//   var res = str.replace(/[A-Z]/g, n + "w");
//   if (typeof n === "undefined") {
//     return str.replace(/[A-Z]/g, " " + "w");
//   }
//   return res;
// }

// console.log(uncamelize("helloWorld"));
// console.log(uncamelize("helloWorld", "-"));
// console.log(uncamelize("helloWorld", "_"));

// Write a JavaScript function to concatenates a given string n times

// function repeat(str, n) {
//   var res = "";
//   if (typeof n === "undefined") {
//     res = str;
//     return str;
//   } else {
//     res = str.repeat(n);
//     return res;
//   }
// }

// console.log(repeat("Ha!"));
// console.log(repeat("Ha!", 2));
// console.log(repeat("Ha!", 3));
// console.log(repeat("Ha!", 6));

// Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// function insert(str, txt = "", pos = 0) {
//   let p1 = str.slice(0, pos);
//   let p3 = str.slice(pos);
//   return p1 + txt + p3;
// }
// console.log(insert("We are doing some exercises.")); // "We are doing some exercises."
// console.log(insert("We are doing some exercises.", "JavaScript ")); // "JavaScript We are doing some exercises."
// console.log(insert("We are doing some exercises.", "JavaScript ", 18)); // "We are doing some JavaScript exercises."

// Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.

// function humanize_format(num) {
//   if (num == undefined) {
//     return "";
//   }
//   const str = num.toString();
//   const last = str.charAt(str.length - 1);
//   if (last === "1") {
//     return str + "st";
//   } else if (last === "2") {
//     return str + "nd";
//   } else if (last === "3") {
//     return str + "rd";
//   } else {
//     return str + "th";
//   }
// }
// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));

// Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.

// const text_truncate = (str, n, ending) => {
//   return n === undefined
//     ? str
//     : ending !== undefined
//     ? str.slice(0, n) + ending
//     : str.slice(0, n) + "...";
// };

// console.log(text_truncate("We are doing JS string exercises."));
// console.log(text_truncate("We are doing JS string exercises.", 19));
// console.log(text_truncate("We are doing JS string exercises.", 15, "!!"));

// Write a JavaScript function to chop a string into chunks of a given length.

// function string_chop(str, chars = str.length) {
//   let arr = [];
//   for (let start = 0; start < str.length; start += chars) {
//     let elem = str.slice(start, start + chars);
//     arr.push(elem);
//   }
//   return arr;
// }
// console.log(string_chop("w3resource")); // ["w3resource"]
// console.log(string_chop("w3resource", 2)); // ["w3", "re", "so", "ur", "ce"]
// console.log(string_chop("w3resource", 3)); // ["w3r", "eso", "urc", "e"]

// Write a JavaScript function to count the occurrence of a substring in a string.

// count = function (str, search) {
//   var count = 0;
//   str = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
//   for (var i = 0; i < str.length; i++) {
//     if (str.substr(i, search.length) == search) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(count("The quick brown fox jumps over the lazy dog", "the"));
// console.log(count("The quick brown fox jumps over the lazy dog", "fox", false));

// Write a JavaScript function to escape a HTML string.
// function escape_HTML(str) {
//   return str.replace(/(<)|(>)|(")/g, function (match, p1, p2, p3) {
//     return (p1 = "&lt;");
//     return (p2 = "&gt;");
//     return (p3 = "&quot;");
//   });
// }
// console.log(
//   escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">')
// );

// Write a JavaScript function that can pad (left, right) a string to get to a determined length.

// function formatted_string(pad, str, pos) {
//   str = str.toString();
//   if (pos === "l") {
//     return pad.slice(0, pad.length - str.length) + str;
//   } else {
//     return str + pad.slice(str.length);
//   }
// }
// console.log(formatted_string("0000", 123, "l")); // "0123"
// console.log(formatted_string("00000000", 123, "")); // "12300000"
