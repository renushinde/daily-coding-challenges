// console.log("Hello!!");

/*-----------------------------------------------------------------------------
Challenge: 00-sayHello (example)
Difficulty: Basic
Prompt:
Write a function called sayHello that returns the string "Hello!".
-----------------------------------------------------------------------------*/

function sayHello() {
  return "Hello";
}

console.log(sayHello());

/*-----------------------------------------------------------------------------
Challenge: 01-addOne
Difficulty: Basic
Prompt:
Write a function called addOne that takes a single number as an argument and returns that number plus 1.
Examples:
addOne(1) //=> 2
addOne(-5) //=> -4
-----------------------------------------------------------------------------*/
// Your solution for 01-addOne here:

function addOne(num) {
  return num + 1;
}
console.log(addOne(1));

/*-----------------------------------------------------------------------------
Challenge: 02-addTwoNumbers
Difficulty: Basic
Prompt:
- Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
- If either argument is not a number, return the value of NaN.
Examples:
addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
-----------------------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:
function addTwoNumbers(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return NaN;
  } else {
    return num1 + num2;
  }
}
console.log(addTwoNumbers(-10, 2));

/*-----------------------------------------------------------------------------
Challenge: 03-sumNumbers
Difficulty: Basic
Prompt:
- Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
- If the array is empty, return 0 (zero).
Examples:
sumNumbers([10]) //=> 10
sumNumbers([5, 10]) //=> 15
sumNumbers([2, 10, -5]) //=> 7
sumNumbers([]) //=> 0
-----------------------------------------------------------------------------*/
// Your solution for 03-sumNumbers here:

// function sumNumbers(arr) {
//   var total = 0;
//   for (var i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
// }
// console.log(sumNumbers[(100, 5)]);

function sumNumbers(array) {
  let total = 0;
  if (array.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
}
console.log(sumNumbers([]));

// Challenge: 06-range
// Difficulty: basic
// Prompt:
// - Write a function called range that accepts two integers as arguments and returns an array of integers starting with the first argument up to one less than the second argument.
// - The range function must be called with the first argument less than or equal to the second argument; otherwise, return the string "First argument must be less than second".

function range(a, b) {
  let rangeArr = [];
  for (let i = a; i <= b; i++) {
    rangeArr.push(i);
  }
  return rangeArr;
}

console.log(range(7, 10));
