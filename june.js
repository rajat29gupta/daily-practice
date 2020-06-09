/********
 *
 * 04 June *
 *
 ********/

// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
// function foo(stringName, position) {
//   let partA = stringName.substring(0, position);
//   let partB = stringName.substring(position + 1, stringName.length);
//   return partA + partB;
// }

// const res =foo("rajat",2);
// console.log(res);

/****************************************************************   ENDS    ***********************************************************************************************/
// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.
// function poo(charInput) {
//   if (charInput.length <= 1) {
//     return charInput;
//   }
//   let midChar = charInput.substring(1, charInput.length - 1);
//   let revChar = charInput.charAt(charInput.length - 1) + midChar + charInput[0];
//   return revChar;
// }

// const res = poo("rajat");

// console.log(res);

/****************************************************************   ENDS    ***********************************************************************************************/
// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7
// function foo(str) {
//   if (str < 0) {
//     return false;
//   }
//   if (str % 3 == 0 || str % 7 == 0) {
//     return str % 3 == 0 || str % 7 == 0;
//   }else{
//       return false
//   }
// //   if (str % 3 == 0) {
// //     return 2;
// //   }
// //   if (str % 7 == 0) {
// //     return 1;
// //   }
// }
// console.log(foo(4));

/****************************************************************   ENDS    ***********************************************************************************************/
/********
 *
 * 05 June *
 *
 ********/

// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
// function foo(str) {
//   let strLength = str.length;
//   if (strLength >= 3) {
//     let lstThree = str.substring(strLength - 3);
//     let newStr = lstThree + str + lstThree;
//     return newStr;
//   } else {
//     return false;
//   }
// }

// const res = foo("rajat");
// console.log(res);

/****************************************************************   ENDS    ***********************************************************************************************/
// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise
// function foo(str) {
//   let inputStr = str.toLowerCase();
//   let frtwrds = inputStr.substring(0, 4);

//   if (frtwrds === "java") {
//     return true;
//   } else {
//     return false;
//   }
// }

// const res = foo("javaram");
// console.log(res);

/****************************************************************   ENDS    ***********************************************************************************************/
// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

// function foo(num1, num2) {
//   if (num1 >= 50 && num1 <= 80||num2 >= 50 && num2 <= 80) {
//     return true;
//   }else{
//       return false
//   }
// }

// const res = foo(52, 80);
// console.log(res);

// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

// function foo(str) {
//   let inputStr = str.toLowerCase();
//   let middlewrds = inputStr.substring(4, 10);

//   if (middlewrds === "script") {
//     let part1 = inputStr.substring(0, 4);
//     let part2 = inputStr.substring(10, str.length);
//     return part1 + part2;
//   } else {
//     return str;
//   }
// }
// const res = foo("JavaScript");
// console.log(res);

/****************************************************************   ENDS    ***********************************************************************************************/
/********
 *
 * 08 June *
 *
 ********/

//  Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.  Go to the editor

// function foo(a, b) {
//   if (a != b) {
//     let val1 = Math.abs(100 - a);
//     let val2 = Math.abs(100 - b);

//     if (val1 > val2) {
//       return b;
//     }
//     if (val2 > val1) {
//       return a;
//     }
//     return 0;
//   } else {
//     return false;
//   }
// }

// const res = foo(95, 95);
// console.log(res);

// Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
// function foo(x, y) {
//   if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
//     if (x == y) {
//       return "Number are same";
//     } else if (x < y) {
//       return y;
//     } else {
//       return x;
//     }
//   }else{
//       return 'Number not in range'
//   }
// }

// const res = foo(45, 60);
// console.log(res);

// Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

// function foo(str, chr) {
//   let charA = str.charAt(1);
//   let charB = str.charAt(3);
//   if (charA === charB) {
//     if (chr === charA) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   console.log(charA);
// }

// const res = foo("javascript", "a");
// console.log(res);

// Write a JavaScript program to check whether the last digit of the three given positive integers is same.
// function foo(a, b, c) {
//   let x = a % 10;
//   let y = b % 10;
//   let z = c % 10;
//   if (x === y && y === z && z === x) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const res = foo(44, 54, 64);
// console.log(res);

/****************************************************************   ENDS    ***********************************************************************************************/
/********
 *
 * 09 June *
 *
 ********/

// Write a JavaScript program to create new string with first 3 characters are in lower case from a given string.
// If the string length is less than 3 convert all the characters in upper case.

// function foo(str) {
//   strLength = str.length;
//   if (strLength < 3) {
//     return str.toUpperCase();
//   }
//   const strPre = str.substring(0, 3).toLowerCase();
//   const strPost = str.substring(3);
//   return strPre + strPost;
// }

// console.log(foo("Python"));
// console.log(foo("Py"));
// console.log(foo("JAVAScript"));

// Write a JavaScript program to compute the sum of the two given integers,
// If the sum is in the range 50..80 return 65 other wise return 80.

// function foo(x, y) {
//   const res = x + y;
//   if (res >= 50 && res <= 80) {
//     return 65;
//   } else {
//     return 80;
//   }
// }

// console.log(foo(10, 10));

// Write a JavaScript program to check from two given integers whether one of them is 8 or
//  their sum or difference is 8.
// function foo(x, y) {
//   if (x == 8 || y == 8 || x + y == 8 || Math.abs(x - y) == 8) {
//     return true;
//   }
//   return false;
// }
// console.log(foo(7, 8));
// console.log(foo(16, 8));
// console.log(foo(24, 32));
// console.log(foo(17, 18));

// Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20
// and if two numbers are same return 40.
// function foo(x, y, z) {
//   if (x == y && y == z && z == x) {
//     return 30;
//   } else if (x == y || z == x || y == z) {
//     return 40;
//   } else {
//     return 20;
//   }
// }

// console.log(foo(8, 8, 8));
// console.log(foo(8, 8, 18));
// console.log(foo(8, 7, 18));

// Write a JavaScript program to check from three given numbers (non negative integers) that two or
// all of them have the same rightmost digit.

// function foo(x, y, z) {
//   if (x < 0 || y < 0 || z < 0) {
//     return false;
//   }
//   const baseX = x % 10;
//   const baseY = y % 10;
//   const baseZ = z % 10;
//   if (baseX == baseY || baseY == baseZ || baseX == baseZ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(foo(-22,32,42));
// console.log(foo(102,302,2));
// console.log(foo(20,22,45));

// Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11

// function foo(a, b) {
//   if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
//     return a % 7 == 0 || a % 11 == 0 || b % 7 == 0 || b % 11 == 0;
//   } else return false;
// }
// console.log(foo(35, 35));

// Write a JavaScript program to reverse a given string
// function foo(str) {
//   return str.split('').reverse().join('');
// }
// console.log(foo("rajat"));

// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

// function foo(str) {
//   return str.replace(/[a-zA-Z]/g, function (x) {
//     return String.fromCharCode(x.charCodeAt(0) + 1);
//   });
// }
// console.log(foo("rajat"));

//  Write a JavaScript program to capitalize the first letter of each word of a given string.
// function foo(str) {
//   return strSplit = str.toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase() + a.substring(1)).join(' ');
// }
// console.log(foo('Write a JavaScript program to capitalize the first letter of each word of a given string.'));

// Write a JavaScript program to convert a given number to hours and minutes.
// function foo(str) {
//   let a = Math.floor(str / 60);
//   let b = str % 60;
//   return a + ":" + b;
// }

// console.log(foo(800));

// Write a JavaScript program to convert the letters of a given string in alphabetical order

// function foo(str){
//     return str.split('').sort().join('');
// }
// console.log(foo('rajat'));

// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
// function foo(str){
//       return (/a...b/).test(str) || (/b...a/).test(str);
// }
// console.log(foo('Chainsbreak'));
// console.log(foo("pane borrowed"));
// console.log(foo("abCheck"));

// Write a JavaScript program to count the number of vowels in a given string.
// function vowels(str) {
//   vowels = ["a", "e", "i", "o", "u"];
//   str = str.split("");
//   contador = 0;
//   str.forEach(function (vowel) {
//     if (vowels.includes(vowel)) {
//       contador++;
//     }
//   });
//   return contador;
// }
// console.log(vowels('rajat'));



