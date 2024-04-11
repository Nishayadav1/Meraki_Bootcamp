// console.log(3 > 2);
// console.log("orange" > "apple");
// console.log("apple" > "Apple");
// console.log("apple" > "app");
// console.log("apple" > "pineapple");
// console.log("10" > "2");
// console.log("10" > 2);
// console.log("20" > "22");
// console.log("20" > "2");
// console.log("20" > 2);
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(null == 0);



// Assignment Questions

// 1. Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.
// let a = 10;
// let b = 5;

// let sum = a + b;
// let difference = a - b;
// let product = a * b;
// let quotient = a / b;
// let modulus = a % b;

// console.log(`Sum: ${sum}`);
// console.log(`Difference: ${difference}`);
// console.log(`Product: ${product}`);
// console.log(`Quotient: ${quotient}`);
// console.log(`Modulus: ${modulus}`);

// let apples = 10;
// console.log(`I have ${apples} apples.`);


// 2. Take two numbers and only print the integer part when a is divided by b.
// let a = 10;
// let b = 3;

// let quotient = a / b;
// console.log(`Quotient: ${quotient}`);

// let modulus = a % b;
// console.log(`Modulus: ${modulus}`);

// console.log(modulus / b);

// console.log(`Integer part: ${quotient - modulus / b}`);

// 3. Take two numbers a,b and print the exponential power of the first number raised by the second.

// let a = 2;
// let b = 3;

// let result = a ** b;
// console.log(`Result: ${result}`);

// 4. Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.

// let a = 10;
// let b = 3;

// let modulus = a % b;
// console.log(`Modulus: ${modulus}`);

// console.log(`Decimal part: ${modulus / b}`);

// 5. Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.

// let A = 80;
// let B = 90;
// let C = 70;
// let D = 85;
// let E = 95;

// let average = (A + B + C + D + E) / 5;
// console.log(`Average: ${average}`);

// 6. Take the cost price a and selling price b of a product, and print the profit obtained on the product.

// let costPrice = 100;
// let sellingPrice = 150;

// let profit = sellingPrice - costPrice;
// console.log(`Profit: ${profit}`);

// 7. Take a number and print out the last digit of the number.

// let number = 12340;
// let lastDigit = number % 10;
// console.log(`Last digit: ${lastDigit}`);

// 8. Take a 2 digit number and return the first and last digits.

// let number = 23;

// let firstDigit = Math.floor(number / 10);

// let lastDigit = number % 10;

// console.log(`First digit: ${firstDigit}`);
// console.log(`Last digit: ${lastDigit}`);

// 9. Write a JavaScript program to find the largest of three numbers.

// let num1 = 10;
// let num2 = 20;
// let num3 = 30;

// let largest = num1;

// if (num2 > largest) {
//     largest = num2;
// }
// if (num3 > largest) {
//     largest = num3;
// }

// console.log(`Largest: ${largest}`);

// 10. Write a JavaScript program to check whether a number is even or odd.

// let number = 10;

// if (number % 2 === 0) {
//     console.log("Number is Even");
// } else {
//     console.log("Number is Odd");
// }

// 12. Write a JavaScript program to convert temperature from Celsius to Fahrenheit and vice versa.

// let celsius = 100;
// let fahrenheit = (celsius * 9 / 5) + 32;
// console.log(`Fahrenheit: ${fahrenheit}`);

// let fahrenheit = 212;
// let celsius = (fahrenheit - 32) * 5 / 9;
// console.log(`Celsius: ${celsius}`);




// let num = 10_000_567;
// console.log(num);

// let num = 10_000_000;
// let num = 1e7;
// console.log(num);

// let num = 2300_000;
// let num = 2.3e6;
// console.log(num);

// let num = 56_000_000_000;
// let num = 5.6e10;

// let num = 0.02;
// let num = 2e-2;
// console.log(num);

// let num = 0.005;
// let num = 5e-3;

// console.log(1.23e3);

// console.log(1e-2 === 1/100);




// Rounding

// 1. Math.floor - Rounds down to the nearest integer

// console.log(Math.floor(3.1));
// console.log(Math.floor(3.9));
// console.log(Math.floor(-3.1));
// console.log(Math.floor(-3.9));

// 2. Math.ceil - Rounds up to the nearest integer

// console.log(Math.ceil(3.1));
// console.log(Math.ceil(3.9));
// console.log(Math.ceil(-3.1));
// console.log(Math.ceil(-3.9));