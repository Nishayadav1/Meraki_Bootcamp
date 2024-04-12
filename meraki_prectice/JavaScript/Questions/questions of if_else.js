// 1. Write a program that checks if a given number is even or odd.
// let num=5;
// if (num%2==0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }

// --------------------------------------------------second way--------------------------------------------

// let num=5;
// let check=(num%2==0)? "even" : "odd"
// console.log(check)


// 2. Create a function that takes two numbers as parameters and returns the larger one.

// let large= function lagestNum(num1,num2){
//     if (num1>num2){
//         console.log("largest no. is = ",num1)
//     }
//     else if(num2>num1){
//         console.log("largest no. is = ",num2)
//     }
//     else{
//         console.log("both numer are equal ",num2)
//     }
// }
// large(5,7)


// 3. Write a function that determines if a given year is a leap year.

// let year= function leapYear(years){
//     if((years%4==0 && years%100!=0) || years%400==0){
//         console.log("its  leap year = ",years)
//     }
//     else{
//         console.log("its not leap year = ",years)
//     }
// }
// year(2024)


// 4. Implement a program that checks whether a given character is a vowel or consonant.

// let char="b";
// if (char=="a" || char=="e" || char=="i" || char=="o" || char=="u" || char=="A" || char=="E" || char=="I" || char=="O" || char=="U" ){
//     console.log(`its ${char} is a vowel`)
// }
// else{
//     console.log(`its ${char} is a consonant`)
// }




// 5. Create a function that takes three numbers as input and returns the largest among them.

// let lagest =function lagestNumber(num1,num2,num3){
//     let m=Math.max(num1,num2,num3);
//     return m;
// }
// console.log(lagest(5,7,9))

// -------------------------------------------------------or-----------------------------------------------------------------------

// let num1=45
// let num2=67
// let num3=98
// if (num1>num2 && num1>num3){
//     console.log(`${num1} is a lagest number`)
// }else if (num2>num1 && num2>num3){
//     console.log(`${num2} is a lagest number`)
// }
// else if (num3>num1 && num3>num2){
//     console.log(`${num3} is a lagest number`)
// }
// else{
//     console.log(`${num1},${num2},${num3} are equal number`)
// }

// 6. Write a program that checks if a given number is positive, negative, or zero.

// let num=0
// if (num==0){
//     console.log(`its ${num} is a zero`)
// }else if(num>0){
//     console.log(`its ${num} is positive number`)
// }
// else{
//     console.log(`its ${num} is negative number`)
// }



// 7. Implement a function that calculates the grade of a student based on their score.

//  let score=80
//  if (num<=100 && num>=90 ){
//     console.log("grade is A")
//  }
//  else if(num<90 && num>=70 ){
//     console.log("grade is B")
//  }
//  else if(num<70 && num>=50 ){
//     console.log("grade is C")
//  }
//  else if(num<50 && num>=33 ){
//     console.log("grade is D")
//  }
//  else{
//     console.log("fail, grade is E")
//  }


// 8. Create a program that determines if a given string is a palindrome.

// let s="mam"
// let r=""
// for (let i=s.length-1; i>=0; i--){
//     r+=s[i];
// }
// if (s==r){
//     console.log("palindrome")
// }
// else{
//     console.log(" not palindrome")
// }




// 9. Write a function that checks whether a person is eligible to vote based on their age.
// const age = 18;
// if (age >= 18) {
//   console.log("You are eligible to vote.");
// } else {
//   console.log("You are not eligible to vote yet.");
// }


// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.
//  let triangle=function triangleType(side1, side2, side3) {
//     if (side1 === side2 && side2 === side3) {
//       console.log("Equilateral triangle"); 
//     } else if (side1 === side2 || side1 === side3 || side2 === side3) {
//       console.log("Isosceles triangle"); 
//     } else {
//       console.log("Scalene triangle"); 
//     }
//   }
//   console.log( triangle(2,5,8));