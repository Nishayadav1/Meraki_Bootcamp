
// let , var and const

// Var - Redeclared, Reassigned, global scope, functional scope, hoisted, undefined
// let - Not Redeclared, Reassigned, Block Scope, hoisted, Temporal Dead Zone, Reference Error
// const - Not Redeclared, Not Reassigned, Block Scope, hoisted, Temporal Dead Zone, Reference Error

//Scope - Scope is the area where a variable is accessible.
// Global ,
// Local Scope - Function Scope, Block Scope

// Block Scope - if, for, while, switch, function, class

// Global Scope - Available throughout the Code / Available Everywhere
// Local Scope - Available within the function or block
// Functional Scope - Available within the function

let a = 10;

{
  let a = 20;
  console.log(a, "Block Scope");
}

console.log(a, "Global Scope");

// Shadow Variable - When a variable is declared in the block scope
//     with the same name as the global scope variable,
//   then the block scope variable will shadow the global scope variable.

// {
//     const name = "Js";
//     console.log(name, "Inside Block");
// }

// console.log(name, "this place is outside the block scope");

// function sayHello() {
//     if(true){
//         var a = 10;
//         console.log(a, "Inside Block");
//     }
//     console.log(a, "Outside Block");
// }

// sayHello();
// console.log(a, "outside function scope");

// function sayHello() {
//   if (true) {
//     var a = 10;
//     console.log(a, "Inside Block");
//   }
//   console.log(a, "Outside Block");
// }

// sayHello();
// console.log(a, "outside function scope");

// {
//     let a = 10;
//     console.log(a, "Block Scope");
// }

// console.log(a, "Global Scope");

// let a = 20;

// {
//    var a = 10;
// }

// console.log(a);

// TDZ - Temporal Dead Zone -
// Temporal Dead Zone is area where variable is inaccesable untill the variable declaration.

// Hoisting - Hoisting is a JavaScript mechanism
// where variables and function declarations are moved to the top of their
// containing scope before code execution.

// Variables and Functions are moved to top of their scope before code execution.

// console.log(name); // TDZ
// TDZ - Temporal Dead Zone
// TDZ - Temporal Dead Zone
// TDZ - Temporal Dead Zone
// TDZ - Temporal Dead Zone
// let name = "Erum";
