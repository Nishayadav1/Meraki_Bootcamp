// what is javaScript
// ----js is programing language for web page ,its create and update both html css

// featurs of js
//  1. dynamic type
//  2. Case sentitive
//  3. Interpreted
//  4.  async lanugaue


// Q:- diffrence HTML and HTML5
//----- html5 its lates version


// diffrene of nul and undiffend
// -------- undifiend => the variable a is declared but not assigned 
// example=>
let a;
console.log(a); // Output: undefined

// --------- null =>ther varible a is declared but in assigned value null
let b = null;
console.log(b); // Output: null


// --------------data type
// Primitive data types: Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Non-primitive data type: Object, Arry, Function
// -------Template literals: ( `My name is ${a} ${b}` )


// Ternary operator: let result = condition? value 1: value 2;
const num=(4%2)? "yes":"no";
console.log(num)

// ---Falsy values: false, 0, “-”, null, Undefined, NaN

// spread opertor -------->(...l)


// Q-- var,  let,   const
// var   :- redeclared, reassigned ,         - global scope / function scope
// let   :- not redeclred, reassigned        - block scope
// const :-  not redeclred, not reassigned   - block scope

// **************************Temporal Dead zone: **********************************************************************************
//--------declration to between tame period of till colsole 




// **************************** diffrence function declaration and function expression

// ---Function declarations are hoisted and can be used before they're defined. 
// ---Function expressions aren't hoisted and must be defined first.

// first class citizen
// ---- function can be stored in a varible
// ---- function can be passed  as an argument
// ---- function can be returned from a function
// ---- function can be stored in an object



// IIFE ==>Imediately Invoked function Expression --> self invoking function
// example--
// (function name(){
//     console.log("hello NIsha");
// })();


// High oder function
// --- A f(n) that takes another function as an argument or return a function
//  example ---
function sayHello(nameFunction){
    console.log("hight order function");
    nameFunction();
}
function nameFunction(){
    console.log("pass a fn as a argumrnt")
}
sayHello(nameFunction);


// callback function
// ----A function that passed as an argument to anthoer function
//  and is executed after some operation has been completed

function nisha(yadav){
    console.log("nisha")
    yadav();
}
function yadav(){
    console.log("sername")
}
nisha(yadav);


// *****************************use of callback function
// -------1. asyncronus programing



// setTimeot - asyncronus programing
//---- it is  a function that will execute the code or function that is passed as agrument
// after ther specified time interval

// setYimeout(function, time) -->time in millisecond, 1sec= 1000ms
// example
setTimeout(()=>{
    console.log("hello setTimeoute")
},2000)



// Hosting 
//------- varible declration to the top of scope
// exapmle
console.log(x)
var x=10;



//arrow function
// ()=>{console.log("")}
//example
const  add =(a,b) => a+b;
console.log(add(1,2))

const min=(k,l)=>k-l;
console.log(min(1,2))


// map
// -------
// example
let l=[2,3,4,5]
let d=l.map((ele)=> ele*2)
console.log(d)


// filter
// --------
// example
let l1=[1,2,3,4,5,6,7,8,9,0];
let l2=l1.filter((ele)=> ele % 2 == 0);
console.log(l2)

// reduce
// ----------
// example
let list=[1,2,3,4,5,6,7,8,9]
let s=list.reduce((acc,ele)=>acc+ele,0)
console.log(s)


// this key word
//------This. key: this keyword is used to access a keyword in the object.
// Global and inside the object and window. Can be used in the regular function but not in the arrow function.

const person={
    name:"nisha",
    age: 21,
    senam: function(){
        console.log("hello, my name is "+ this.name +"and I am "+ this.age + " old.")
    }
}
person.senam();





////object
// type of object ==> 1. object literal,  2.factory function, 3.constructor fuction  

// 1.object retrial
const obj = {
    a: "apple",
    b: "banana",
    c: {
        d: "dog",
        e: "elephant"
    }
};
const shallowCopy = Object.assign({}, obj); // Shallow copy
shallowCopy.a = "A";         // Modify property a in the shallow copy
shallowCopy.c.d = "D";       // Modify property c.d in the shallow copy
console.log(shallowCopy);
console.log(obj);
//  shallow -- when we change in shallow copy its only effect nested object



// -------deep copy
// const deepCopy=JSON.parse(JSON.stringify(obj)) //deepcopy
// deepCopy.a="A"
// deepCopy.c.d="D"
// console.log(deepCopy)
// console.log(obj)

// its effcted any origin object



// 2. Factory function
//--------- create many object in one time
 function onbject(keyvalue, valueofvalue){
    return{
        name:keyvalue,
        age:valueofvalue,
        course: function(){
              console.log(this.name +"age is "+ this.age)
        }
    }
 }
const person1=onbject("ajay",17)
const person2=onbject("perveen",15)
person1.course();
person2.course();

// ------or ------
function fact(a,b){
    return{
        name:a,
        age:b,
        g:function(){
            console.log(this.name +" and "+ this.age)
        }
    }

}
const k=fact("komal",90)
const k1=fact("kiran",900)
k.g()
k1.g()



// 3. constructor function
// -------
// example

// function student1(name1,rollno){
//     this.name=name1
//     this.rollno=rollno
// }
// const object= new student1("niwsha",1)
// console.log(object.name)


function frnd(frnd1,frnd2){
    this.freiend=frnd1
    this.frend2=frnd2
}
const object=new frnd("kajal","nisha")
console.log(object.frend2)







// let m1=[1,2,3,4,5,6]
// m1.reverse()
// console.log(m1)
console.log(Math.abs(-5)); // Output: 5
console.log(Math.floor(4.9)); // Output: 4
console.log(Math.ceil(4.1)); // Output: 5
console.log(Math.round(4.5)); // Output: 5
console.log(Math.max(5, 10, 3)); // Output: 10
console.log(Math.min(5, 10, 3)); // Output: 3
console.log(Math.pow(2, 3)); // Output: 8 (2^3)


// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }



// differ in js
// diff  rem and em
// diff  aling tiem and text align
//  diff absoult and relativ link
// selector
//  eline element and block element
// box model
// sudo selector 
// inline block
// hidden visbility
// diff  flex and grid


// git----





//_______________________--dom--_____________________________
