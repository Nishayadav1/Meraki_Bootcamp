
//global scope - window in browser

// let a = 1; //global variable -block scope
// const name = "Js"; //global variable - block scope
// var b = 2; //global variable - global scope

// sayHello(); //function hoisting

// function sayHello() {
//     console.log("Hello");
// }

// let sayHello = function () {
//     console.log("Hello");
// }

// function sayHello() {
//     console.log("Hello");
// }

// sayHello();

// variable hoisting

// console.log(a); //undefined  //Script Block
// console.log(b); //undefined  //Script Block
// console.log(c); //undefined  

// const a = 10;
// let b = 20;
// var c = 30;

// var myName = "Sangeeta";
// const myName1 = "Nikita";
// let myName2 = "Punam";

// console.log(myName); //Sangeeta
// console.log(myName1); //Nikita
// console.log(myName2); //Punam

// function printName(){
//     var name = "Vanashri";
//     console.log(name,"Inside Function");
// }

// printName();
// console.log(name,"Outside Function");

// two arguments - name, age
// write a function that will check your age, if you are above 18,
//  you can vote, else you can't vote

// not vote - Hey , Puran, Your age is 9 You are not eligible to vote

// function call(name, age) { - parameters -accepting the values
//     console.log(name, age);
// }

// call("Sangeeta", 10); - arguments, passing the values

// function age(name,age){
//     if (age>=18){
//         return `Hey ${name}, your age if ${age}  so you are eligible for vote `;
//     }
//     else{

//         return `Hey ${name}, your age if ${age}  so you are not  eligible for vote `;
//     }
// }
// `` - Template Literals
// ${} - String Interpolation

// console.log(`Result is : - ${age("Eram",19)}`);

// Arrow Function

// let sayHello = () => {
//   return "Hello";    // Explicit Return
// };

// let sayHello = () => "Hello"; // Implicit Return

// // => - Arrow Function , Fat Arrow

// console.log(`Result is :-  ${sayHello()}`);

// function add(a, b) {
//     return a + b;
// }

// let add =(a,b)=>{
//     let sum;
//     sum = a+b;
//     return sum;
// }

let add = (a, b) => a + b;

console.log(add(10, 20));
