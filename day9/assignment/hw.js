// // 1️ What will be the output of the following code? Explain why.
// let x = "5";
// let y = 5;
// console.log(x == y); 
// console.log(x === y);

// OUTPUT:
// true : AS THE VALUE OF X AND Y IS EQUALL
// FALSE : AS THE DATA TYPE OF X AND Y IS NOT EQUALL


// 2)
// const words = ["JavaScript", "Programming", "Function", "Hoisting"];
// function getLongestWordLength(wordsArray) {
//     return wordsArray.reduce((maxLength, word) => 
//         Math.max(maxLength, word.length), 0);
// }

// console.log(getLongestWordLength(words));

// aNS: 11 , "REDUCE" ITERATES OVER THE ARRAY AND KEEPS TRACK OF THE MAXIMUM LENGTH


// 3️) What will be logged in the console? Explain your answer.
// function testScope() {
//     if (true) {
//     var a = 1️0;
//     let b = 2️0;
//     const c = 3️0;
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
//    }
//    testScope();
// ANS: 10
//      ReferenceError: b is not defined
//      var has function scope SO it Is accessible anywhere inside the function
//      let and const have block scope SO they are only accessible within the block. that is why error will come


// 4)const name = "John"; // Use const since it doesn't change

// function greet() {
//     if (true) {
//         const message = "Hello " + name;
//         console.log(message); 
//     }
// }

// greet();


// 5)const multiply = (a, b) => a * b;


// 6)const obj = {
//  name: "Alice",
//  sayHello: function() {
//  setTimeout(() => {
//  console.log("Hello, " + this.name);
//  }, 1️000);
//  }
// };
// obj.sayHello();

// ans: Hello, Alice
// obj have name= "Alice". method= sayHello()
// In the methodthere is a setTimeout() which is used to delay execution by 1000 milliseconds 



// 7)console.log(a);
// var a = 1️0;
// console.log(b);
// let b = 2️0;

// ans:undefined
// ReferenceError  
// before inserting any value to the "var a", the console.log(a) is used so undefined
// let variable is hoisted, so obviously it will show ReferenceError


// 


// 9)
// console.log(5 + "5");  = "55"
// console.log(5 - "3");  = 2
// console.log(5 * "2");  = 10
// console.log("10" / 2); = 5
// console.log(10 % "3"); = 1


// 10)et x = 10;
// x += 5;  ans: x = x + 5
// x *= 2;  ans: x = x * 2
// x -= 3;  ans: x = x - 3
// x /= 2;  ans: x = x / 2


// 11)console.log(5 > 3 && 10 < 20);  true. both the "5>3" and "10<20" conditions are true
// console.log(5 > 3 || 10 > 20);   true. condition "5>3" is true, so the final answer is true as there is "||" in between
// console.log(!(5 > 3));           false. "5>3" is true but "!(5>3)" is not true so ultimately it is false


// 12)console.log(sum(2, 3));  10. default parameter c=5, so 2+3+5=10
// console.log(sum(2, 3, 10));  15. 2+3+10=15

// 13)function sum(...args) {
//     return args.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3));       = 6
// console.log(sum(10, 20, 30, 40)); = 100
// console.log(sum());              = 0
//  ...args  is used to accept unlimited arguments.
//   reduce() is used to sum up the array.


// 14)
// Every time outer() is called a new count variable is created inside that function.
// counter1 and counter2 do not share the same count variable.
// Calling counter1() twice will increase one count but calling counter2() starts fresh with a new count.

// actual code:
// function outer() {
//     let count = 0; 
//     return function inner() {
//         count++;
//         console.log(count);
//     };
// }

// const counter1 = outer();
// counter1(); 
// counter1(); 

// const counter2 = outer();
// counter2(); 
// counter2(); 
// Closure Preserves count

// outer() creates a new count variable each time it is called.
// When counter1 = outer(); is called, count = 0 is created and stored in that instance.
// Calling counter1() increments the same count every time.
// When counter2 = outer(); is called, a new count is created (again starting at 0).



// 1)Number Reversal without Using Built-in Methods
//  Problem:
// Write a function reverseNumber(num) that takes a number and returns its reverse.
// Example:
// reverseNumber(1️2️3️4️); // Output: 4️3️2️1️
// reverseNumber(-56️7️); // Output: -7️6️5
//  Hint: Convert the number to a string manually and reverse it

//  ans:
//  function reverseNumber(num) {
//     let isNegative = num < 0; 
//     if (isNegative) num = -num; 

//     let reversed = 0;
//     while (num > 0) {
//         let digit = num % 10; 
//         reversed = reversed * 10 + digit; 
//         num = Math.floor(num / 10); 
//     }

//     return isNegative ? -reversed : reversed; 
// }


// console.log(reverseNumber(1234));  
// console.log(reverseNumber(-567));  
// console.log(reverseNumber(100));   
// console.log(reverseNumber(0));     


// 2)Custom Length Function
//  Problem:
// Create a function customLength(str) that returns the length of a string without using length
// property.
// Example:
// customLength("JavaScript");

// ans:
// function customLength(str) {
//     let count = 0;
//     while (str[count] !== undefined) {
//         count++; 
//     }
//     return count;
// }


// console.log(customLength("JavaScript")); 
// console.log(customLength("Hello"));     
// console.log(customLength(""));           
// console.log(customLength("1234567890")); 


// 3)fixtures:
// Function declarations (function add() {}) are hoisted to the top of the scope.
// Function expressions (var multiply = function() {}) are not hoisted with their assigned value, only the variable declaration (var multiply) is hoisted, leaving multiply as undefined at the time of calling

// code:
// console.log(add(2, 3)); // Should output: 5
// console.log(multiply(2, 3)); // Should output: 6

// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) { // Changed from function expression to function declaration
//     return a * b;
// }


// 4)function counter() {
//     let count = 0; 

//     return function() {
//         count++; 
//         return count; 
//     };
// }


// const count1 = counter();
// console.log(count1());
// console.log(count1()); 
// console.log(count1()); 

// const count2 = counter(); 
// console.log(count2()); 
// console.log(count2());
