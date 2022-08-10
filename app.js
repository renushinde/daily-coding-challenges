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
