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
