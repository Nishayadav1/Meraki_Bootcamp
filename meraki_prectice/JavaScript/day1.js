// // let button = document.getElementById('btn'); // button
// // let text = document.getElementById('text'); //text

// // button.addEventListener('click', function(){  //change text on button click
// //     text.innerHTML = "Hii";
// // });

// // Variable - A variable is a container for storing data values.

// // let and const are used to declare a variable. (ES6) - 2015

// // var is also used to declare a variable but it is not recommended.

// // let firstname; //variable declearation
// // let lastname; //variable declearation

// // firstname = "Jhon"; //variable assignment  
// // firstname = "Mark"; //variable reassignment
 
// //  = is used to assign value to a variable , assignment operator
// // = "" , '' used for Text / String

// // let fullname = "Punam" //variable declearation + assignment

// // fullname = "Punam Singh" //variable reassignment

// // let fullname = 9 //variable redeclaration

// // We can not redeclare a variable using let keyword.

// // identifier - name of the variable

// // console.log(fullname);

// // const firstNumber = 9; //variable declearation + assignment
// // firstNumber = 10; //variable reassignment

// // const firstNumber = 10; //variable redeclaration

// // in const , we can not reassign a variable and we can not redeclare a variable.

// // console.log("first", firstNumber);

// // let firstNumber = 10;

// // Hoisting- JavaScript hoisting is the process of moving all the declarations to the top of the current scope (block scope / functional scope).

// // const firstNumber = 10; //variable redeclaration

// // console.log(firstname); //output - Jhon
// // console.log(lastname); //output - undefined

// //  var - global scope / functional scope
// // let and const - block scope

// // var - hositing
// // let and const - no hositing

// // Rule for naming JS variable:

// // 1. Variable names can only contain letters, numbers, $ and _.\
// // 2. Variable names can not start with a number.
// // 3. Variable names are case sensitive.
// // 4. Variable names can not contain spaces.
// // 5. Variable names should be descriptive.
// // 6. Variable names can not contain reserved words.


// // MultipleWords - camelCase,

// // namingConvention
// // camelCase; - JS
// // PascalCase; - React
// // snake_case; - Python
// // kebab-case, dash-case; - CSS



// // firstname = "Punam"; //valid

// // firstName;
// // fullname;
// // goingToShopping;


// // let name@name = "Punam"; //invalid

// // let 9name = "Punam"; //invalid

// // Varibale Types / Data Types

// // 1. String - Text
// // 2. Number - 1, 2, 3, 4, 5
// // 3. Boolean - true / false
// // 4. Object - {}
// // 5. Array - []
// // 6. Null - null
// // 7. Undefined - undefined

// //  String - Collection of characters
// let name = "Punam";
// let name2 = 'Sangeeta';

// const sentence = "I'm going to the market";
// const quotes = "He Said 'I am Learning JS'";

// let num1 = 10;
// const num2 = 20;
// var num3 = 30;

// let result = false;

// let test = 10 > 5;

// // console.log(test);

// // Array - Collection of data of same type or different type

// const array = [10, 5, "Punam", "Sangeeta", true];

// // console.log(array);
// // index based locations - index statrs from 0

// // console.log(array[5]);

// // object - Collection of key value pairs

// let student = {
//     name:"Punam",
//     age: 25,
//     location: "Pune",
//     phone: {
//         mobile: 1234567890,
//         landline: 1234567890
//     } 
// }

// // console.log(student.phone.mobile);

// // undefined - variable is declared but not assigned any value.

// let box;

// // console.log(box);

// // null - variable is declared and assigned null value.

// let box2 = null; // empty

// // console.log(box2);

// // Dynamically type language - JS

// let test1 = "10.7";

// // typeof - that returns its data type

// // console.log(typeof test1);

// // integer - 1, 2, 3
// // float - decimal number ( 1.3 , 1.4556)

// // Convert Number to String , String to Number

let num4 = String(3);
// console.log(typeof num4);

let num5 = Number("5");
// console.log(typeof num5);

// Arithmatic Operators

// + // Addition
// - // Subtraction
// * // Multiplication
// / // Division
// % // Modulus - returns reminder
// ** // Exponentiation - power

let num6 = 10;
let num7 = 3;


// console.log(Math.pow(num6,2))

// console.log(num6 ** 2);

// Calulate the  total second of March month;

// let days = 31;
// let hours = 24;
// let minutes = 60;
// let seconds = 60;

// let totalSeconds = days * hours * minutes * seconds;

// console.log(totalSeconds)

// Calculate total hours in a year.

// Increment and Decrement Operators

// Post Increment
// ++ // Increment
// -- // Decrement

let num8 = 10;

// post increment - first return then increment
// pre increment - first increment then return

// console.log(num8--,"first");

// console.log(num8,"second");

// console.log(num8 -- ,"first"); // 10

// console.log(num8,"second"); // 9


// BODMAS

// console.log(9+9-5*5); 

// console.log(10 + 8 + "8") = 18 + "8" = "188";

// console.log(10 + 5 + "Hello" + 9 + 9);  // 10 + 5 = 15 + "Hello" = 15Hello + 9 = 15Hello9 + 9 = 15Hello99
// left to right

// let num10 = 10;
// let num11 = 20;
// let word = "ten";

// console.log(num10 + num11 + word);

// String + Number = String

//  + concatenation operator
