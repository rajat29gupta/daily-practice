// Write a JavaScript function to repeat a string a specified times
// function repeatString(string, offset) {
//     console.log(string.repeat(offset));
// }

// repeatString('x', 3);

// Write a JavaScript function to strip leading and trailing spaces from a string
// function strip(str) {
//     return str.trim();
// };
// console.log(strip('javascrpt '));
// console.log(strip(' javascrpt'));
// console.log(strip(' javascrpt '));


// Write a JavaScript function to truncate a string to a certain number of words.

// const foo = (str, num) => {
//     let inputStr = str.split(" ");
//     return inputStr.slice(0, num).join(" ");
// }

// console.log(foo("The quick brown fox jumps over the lazy dog", 4));

// Write a JavaScript function to alphabetize a given string.
// const poo = (str) =>{
//     return str.split("").sort().join('').trim();
// }
// console.log(poo('United States'));

// Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
// function remove_first_occurrence(str1, str2) {
//     return str1.replace(str2, '');
// };
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));


// Write a JavaScript function to convert ASCII to Hexadecimal format.
// function ascii_to_hexa(str) {
//     var hex = '';
//     for (var i = 0; i < str.length; i++) {
//         hex += '' + str.charCodeAt(i).toString(16);
//     }
//     return hex;
// };
// console.log(ascii_to_hexa('12'));
// console.log(ascii_to_hexa('100'));


// Write a JavaScript function to find a word within a string. 

// const search_word = (str1, str2) => {
//     let myString = str1.split(' ')
//     let count = 0
//     for (let i = 0; i <= myString.length; i++) {
//         if (str2 == myString[i]) {
//             count = count + 1
//         }
//     }
//     return `${str2} was found ${count} times`
// }

// console.log(search_word('The quick brown fox', 'fox'))


// Write a JavaScript function check if a string ends with specified suffix.
// function string_endsWith(str1, str2) {
//     var res = true;
//     if (str2 === '') return false;
//     if (str1.endsWith(str2)) return res;
// };
// console.log(string_endsWith('JS PHP PYTHON', 'PYTHON'));
// console.log(string_endsWith('JS PHP PYTHON', ''));

// Write a JavaScript function to convert a string to title case.
// function sentenceCase(x) {
//     var spliX = x.split(' ');
//     for (var n in spliX) {
//         spliX[n] = spliX[n].substring(0, 1).toUpperCase() + spliX[n].substring(1);
//     }
//     return spliX.join(' ');

// }
// console.log(sentenceCase('PHP exercises. python exercises'));

// Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison.
// const foo = (str, str1) => {
//     return str.toUpperCase() === str1.toUpperCase();
// }
// console.log(foo('abcd', 'AbcD'));

// console.log(foo('ABCD', 'Abce'));


// Write a JavaScript function to create a case-insensitive search
// const poo = (str, srch) => {
//     str = str.toLowerCase();
//     srch = srch.toLowerCase();
//     return str.includes(srch)
// }
// console.log(poo('JavaScript Exercises', 'exercises'));
// console.log(poo('JavaScript Exercises', 'Exercises'));
// console.log(poo('JavaScript Exercises', 'Exercisess'));


// Write a JavaScript function to uncapitalize the first character of a string.
// const foo = str => {
//     return str.charAt(0).toLowerCase() + str.slice(1);
// }

// console.log(foo('Js string exercises'));


// Write a JavaScript function to Uncapitalize the first letter of each word of a string.
// const foo = str => {
//     let res = '';
//     let strng = str.split(' ');
//     for (let i = 0; i < strng.length; i++) {
//         res += strng[i].substr(0, 1).toLowerCase() + strng[i].substr(1) + " ";
//     }
//     return res
// }

// console.log(foo('Js String Exercises'));

// Write a JavaScript function to capitalize each word in the string
// const foo = str => str.toUpperCase();
// console.log(foo('js string exercises'));


// Write a JavaScript function to test whether the character at the provided (character) index is upper case
// const isUpperCaseAt = (str, num) => {
//     return str.charAt(num).toUpperCase() === str.charAt(num)
// }
// console.log(isUpperCaseAt('Js STRING EXERCISES', 0));


// Write a JavaScript function to test whether the character at the provided (character) index is lower case.
// const foo = (str, num) => {
//     return str.charAt(num).toLowerCase() === str.charAt(num)
// }
// console.log(foo('Js STRING EXERCISES', 1));


// Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.
// function humanize(n) {
//     var suf = ['th', 'st', 'nd', 'rd'];
//     var last = String(n).substr(-1);
//     for (var i = 0; i < suf.length; i++) {
//         if (last < 4) return n + suf[last];

//     }
// };
// console.log(humanize(1));
// console.log(humanize(20));
// console.log(humanize(302));