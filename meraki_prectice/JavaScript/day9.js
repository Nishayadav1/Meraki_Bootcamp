// Loops - for, while, do while

// for loop

// Syntax:
// for (initialization; condition; increment/decrement) {
//     // code block
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for(let i = 0; i < 5; i++) {
//     console.log('Hello World');
// }
// console.log(i);

// let i = 0;
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);

// let i = 0;
// for (; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);

// let i = 0;
// for (; i < 5;) {
//     console.log(i);
//     i++;
// }

// for(; ;) {
//     console.log('Hello World');
// }


// while loop

// Syntax:
// while (condition) {
//     // code block
// }

// let i = 0;
// while(i < 5) {
//     console.log(i);
//     i++;
// }

// let i = 5;
// while(i < 1) {
//     console.log(i);
//     i--;
// }

// let i = 5;
// while(i > 0) {
//     console.log(i);
//     i--;
// }

// let i = 5;
// while(i) {
//     console.log(i);
//     i--;
// }

// let i = 5;
// while(i) console.log(i--);


// do while loop

// Syntax:
// do {
//     // code block
// } while (condition);

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while(i < 5);

// let i = 5;
// do {
//     console.log(i);
//     i--;
// } while(i > 0);

// let i = 5;
// do {
//     console.log(i);
//     i--;
// } while(i > 6);



// continue statement - to skip the current iteration and continue with the next iteration

// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
// }

// for(let i = 0; i < 10; i++) {
//     if(i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// break statement - to exit the loop

// homework - diff b/w for, while and do while loop & break statement 
// print the numbers from 1 to 10 using for loop and break statement


// Functions

// function declaration

// Syntax:
// function functionName(parameter1, parameter2, ...) {
//     // code block
// }

// function greet() {
//     console.log('Hello World');
// }
// greet();
// console.log("--------------");
// console.log("--------------");
// console.log("--------------");
// console.log("--------------");
// console.log("--------------");
// console.log("--------------");
// greet();

// function greet() {
//     let fName = 'John';
//     console.log('Hello ' + fName);
// }
// greet();
// console.log(fName);
// greet();

// let fName = "John";
// function greet() {
//     console.log('Hello ' + fName);
// }
// greet();
// console.log(fName);

// let fName = "John";
// function greet() {
//     fName = "Sushmita";
//     console.log('Hello ' + fName);
// }
// console.log(fName);
// greet();
// console.log(fName);

// let fName = "John";
// function greet() {
//     let fName = "Sushmita";
//     console.log('Hello ' + fName);
// }
// console.log(fName);
// greet();
// console.log(fName);

// Using var, we can reassign and redeclare the variable
// Using let, we can reassign the variable but cannot redeclare the variable
// Using const, we cannot reassign and redeclare the variable

// Types of Errors
// 1. ReferenceError
// 2. TypeError
// 3. SyntaxError