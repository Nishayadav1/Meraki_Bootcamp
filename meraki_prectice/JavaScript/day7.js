// Math.random() - Returns a random number between 0 and 1

// console.log(Math.random());
// let random = Math.random();
// console.log(random);
// console.log(parseInt(random*10));


// Math.max() - Returns the largest of zero or more numbers

// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.max(-1, -2, -3, -4, -5));


// Math.min() - Returns the smallest of zero or more numbers

// console.log(Math.min(1, 2, 3, 4, 5));
// console.log(Math.min(-1, -2, -3, -4, -5));


// Math.pow() - Returns base to the exponent power, that is, base exponent

// console.log(Math.pow(2, 3)); // 2^3 = 8
// console.log(Math.pow(3, 2));
// console.log(Math.pow(3, -1));
// console.log(Math.pow(3, 0));
// console.log(Math.pow(3, 0.5));
// console.log(Math.pow(3, 1/2));
// console.log(Math.pow(3, -2));
// console.log(Math.pow(2, -2));


// Math.sqrt() - Returns the square root of a number

// console.log(Math.sqrt(4));
// console.log(Math.sqrt(16));
// console.log(Math.sqrt(25));


// Strings Methods

// Quotes
// console.log('Hello, World!'); // Single quotes
// console.log("Hello, World!"); // Double quotes
// console.log(`Hello, World!`); // Template literals or backticks

// Length

// let str = "Hello";
// console.log(str.length);

// let str2 = "Hello, World!";
// console.log(str2.length);

// let str = "Hello";
// console.log(str[0]); // first character
// console.log(str[-1]);
// console.log(str[4]);
// let strLength = str.length;
// console.log("Length of the string is:", strLength);
// console.log(str[strLength - 1]); // last character

// let str = "Abc";
// Index value of A is 0, b is 1, and c is 2
// console.log(str.length); // 3
// console.log(str[0]);
// console.log(str[str.length - 1]);

// let str = "Hello, World!";
// console.log(str[str.length - 1]);

// let str = "Hello";
// console.log(str[0]);
// console.log(str.at(0));
// console.log(str.at(-1));
// console.log(str.at(-2));


// Strings are immutable

// let str = "Hello";
// str[0] = "h";
// console.log(str[0]);

// let str = "Hello";
// str = "hello";
// console.log(str);


// Changing the case of a string

// let str = "HELLO";
// console.log(str.toLowerCase());

// let str = "hello";
// console.log(str.toUpperCase());

// let str = "hello";
// let firstChar = str[0].toUpperCase();
// let remainingChars = str.slice(1).toLowerCase();
// console.log(firstChar + remainingChars);


// indexOf() - Returns the index of (the position of) the first occurrence of a specified text in a string

// let str = "Hello";
// console.log(str.indexOf("H"));
// console.log(str.indexOf("e"));
// console.log(str.indexOf("l"));
// console.log(str.indexOf("o"));

// let str = "This is a string";
// console.log(str.indexOf("i"));
// console.log(str.indexOf("is"));
// console.log(str.indexOf("i", 6));

// lastIndexOf() - Returns the index of (the position of) the last occurrence of a specified text in a string

// let str = "This is a string";
// console.log(str.lastIndexOf("i"));