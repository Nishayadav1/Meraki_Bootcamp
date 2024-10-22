
// Write Ones , Use Many Times

// function functionName() {
//   action, statment, code
// }

// fuunction defination, function statment

// function generateMessage() {
//   console.log("Hello World");
// }

// generateMessage(); // calling the function, invoke the function, execute the function

// generateMessage();
// generateMessage();
// generateMessage();

// function with parameters
// Number, string, boolean, object, array, function

// let number = 10;

// function printNumber(number){

//     return (number.luckyNo * number.n) + 5

// }

// function passingNumber(num){  // num - parameter
//     return num;
// }

// const result = passingNumber(10)*printNumber({"name":"Sangeeta","luckyNo":7,"n":5}); //number - argument

// console.log(result);

// let array = [10, 20, 30, 40, 50];

// function passingArrays(arr){
//     arr[0] = 100;
//     console.log(arr);
// }
// console.log(array[0]); // 10
// passingArrays(array); //100

// printNum([10,20,30,40]);

// const obj = {
//     name: "Jhon",
//     age: 22
// }

// function printObject(obj){
//     console.log(obj);
// }

// function decleration
// function printObject() {
//   return 10;
// }

// printObject();

// // function expression
// const s = function () {
//   // anonymous function
//   console.log("Hello World");
// };

// s();


// block scope
{
    let a="niaj"
    var b="hvg"
    console.log(a)
}
// console.log(b) //a is not difine

// function scope
function add(){
    let a1="miassd"
    let b=a1
    console.log(b)
}
// console.log(b)  // not dinfine b
add()


var c=10;
function add1(){
    let b1=c+5;
    console.log("b=",b1)
}
// var a2=c+b1;
var d=c
console.log("g=",d)
// console.log(a2)
add1()



function nis(){
    let j=2
    function mon(){
        let k=j+1
        return k

    }
}
nis() ///laxical scope


