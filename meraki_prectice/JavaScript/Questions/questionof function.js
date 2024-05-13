// // 1. Given length and breadth of a rectangle, return the area of the rectangle.
// // function areaRectangle(lenght,breath){
// //     console.log(lenght*breath);
// // }
// // areaRectangle(2,5);


// // 2. Take a number and print the square of the number
// // let sqr= function square(a){
// //     let s=a*a;
// //     return s;
// // }
// // let b=5;
// // console.log(sqr(b));




// // 3. Take two numbers and only print the integer part when a is divided by b.
// // let integer= function divided(a,b){
// //     if (a%b==0){
// //         console.log(a);
// //     }
// //     else{
// //         console.log(b);
// //     }
// // }
// // integer(16,4);



// // 4. Take a number and print out the last digit of the number.
// // let num= function lastDigitNumber(num1){
// //     let a=num1%10;
// //     console.log(a)
// // }
// // num(123)


// // 5. Take a number and find the cube of that number.
// // let num=function cube(num1){
// //     let a=num1**3;
// //     return a;
// // }
// // console.log(num(2))


// // 6. Take a 3 digit number and print the reverse of that number. Ex - 235 = 532
// // function threeDigitNumber(num) {
// //     if (num < 100 && num > 999) {
// //         return "its not three digit number";
// //     }
// //     let r = 0;
// //     while (num > 0) {
// //         let l = num % 10;
// //         r = (r * 10) + l;
// //         num = Math.floor(num / 10);
// //     }
// //     return r;
// // }
// // console.log(threeDigitNumber(-124));

// // 7. Take a number and print ut the first digit of the number. Ex - 145 = 1, 789 = 7
// // function firstDighitNumber (num){
// //     let s =num.toString();
// //     let f=parseInt(s[0])
// //     // console.log(typeof(f))
// //     return f;
// // }
// //  console.log(firstDighitNumber(567))


// // 8. Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7
// // function firstAndLastDigitNumber(num) {
// //     let s = num.toString();
// //     let f = parseInt(s[0]);
// //     // console.log(typeof(f));
// //     let l = parseInt(s[s.length - 1]);
// //     // console.log(typeof(l));
// //     let sum1 = f + l;
// //     console.log(sum1);
// // }

// // firstAndLastDigitNumber(345);



// // 9. Take salary of five employees and print the average salary of all the employees.
// // function salaryEmployees(e1,e2,e3,e4,e5){
// //     let s=e1+e2+e3+e4+e5;
// //     let avg=s/2
// //     return avg;

// // }
// // console.log(salaryEmployees(2000,1000,1500,60000,20000));

// // 10.Take two numbers and swap them. Ex - a = 10, b=5; =&gt; a=5, b=10;
// // function swap(num1, num2) {
// //     let a=num1
// //      num1=num2
// //      num2=a
// //      console.log(num1,num2)
// // }
// // swap(10, 5);



// // s="ab"
// // a=list(s)
// // b=set(a)
// // d1=list(b)
// // m=[]
// // l=0
// // for i in range(len(d1)):
// //     c=a.count(d1[i])
// //     m+=[c]
// // s1=set(m)
// // s2=list(s1)
// // for j in range(len(s2)):
// //     c1=m.count(s2[j])
// //     if c1==2:
// //         l+=1
// // if l==len(s2):
// //     print("YES")
// // else:
// //     print("NO")


// //------------------ arrow function
// // let m=()=>console.log("hello nisha");
// // m();

// //----------------- hight order function
// function getId(getName){
//     getName();
//    console.log("hii");
// }

// function getName(){
//    console.log("hlo")
// }

// getId(getName)
 

// //---------------------callback function
// function greet(name,callback){
//    console.log("hello,"+ name +"!")
// }

// function syGoodbay(){
//     console.log("goodbye")
// }

// greet("nisha",syGoodbay)

// //-----------------------




















































