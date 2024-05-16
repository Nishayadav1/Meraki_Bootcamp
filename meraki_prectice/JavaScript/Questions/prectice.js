// Sum of Array Elements: Write a function to calculate the sum of all elements in an array of integers.


// function sumOfArray(l){
    // let sum=0;
    // for(let i=0;i<l.length;i++){
    //     sum+=l[i]
    // }
    // return sum;
// }
// let l=[2,1,3,4,5,6,7,8,9]
// console.log(sumOfArray(l))

// -------------------------------------------or---------------------------------------

// function sumOfArray(l){
//     let a=l.reduce((sum,current)=>sum+current,0);
//     return a
// }
// let l=[2,1,3,4,5,6,7,8,9]
// console.log(sumOfArray(l))


//  Average of Array Elements: Write a function to calculate the average of all elements in an array of integers.

// function avgOfArray(l1){
//     let sum=0;
//     for(let i = 0; i < l1.length; i++){
//         sum+=l1[i]
//     }
//     let avg= sum / l1.length;
//     return avg;
// }
// let l1 = [2, 1, 3, 4, 5, 6, 7, 8, 9]; 
// console.log(avgOfArray(l1));

//  --------------------------------------------or-------------------------------------
// function avgOfArray(l1){
//         let sum = l1.reduce((sum, current) => sum + current, 0); 
//         return sum / l1.length; 
// }
// let l1 = [2, 1, 3, 4, 5, 6, 7, 8, 9]; 
// console.log(avgOfArray(l1));



//  Find Maximum Element: Write a function to find the maximum element in an array of integers.

// function maxOfArray(l3){
//     let m=l3[0];
//     for (let i=0; i<l3.length; i++){
//         if (m<l3[i]){
//             m=l3[i]
//         }
//     }
//     return m
// }

// let l3 = [2, 1, 3, 4, 5, 6, 7, 8, 9]; 
// console.log(maxOfArray(l3));

// ---------------------------------------or--------------------------------------
// function maxOfArray(l3){
//     let max=Math.max(...l3);
//     return max;
// }

// let l3 = [2, 1, 3, 4, 5, 6, 7, 8, 9]; 
// console.log(maxOfArray(l3));



// Find Minimum Element: Write a function to find the minimum element in an array of integers.
// function maxOfArray(l3){
//     let m=l3[0];
//     for (let i=0; i<l3.length; i++){
//         if (m>l3[i]){
//             m=l3[i]
//         }
//     }
//     return m
// }
// let l3 = [2, 1, 3, 4, 5, 6, 7, 8, 9]; 
// console.log(maxOfArray(l3));

// ---------------------------------or-------------------------------------------
// function minOfArray(l3){
//     let min=Math.min(...l3);
//     return min;
// }
// let l3 = [2, 1, 3, 4, 5, 6, 7, 8, 9]; 
// console.log(minOfArray(l3));




//  Array Search: Write a function to search for a given element in an array and return its index if found, otherwise return -1.
// function serachArray(l3,ele){
//     for (let i=0; i<l3.length; i++) {
//         if (l3[i] === ele) {
//             return i;
//         }
//     }
//     return -1;
// }   
// let l3 = [2, 1, 3, 4, 5, 6, 7, 8, 9]; 
// let ele=6;
// console.log(serachArray(l3,ele));


// Array Sorting: Write a function to sort an array of integers in non-decreasing order (ascending).
// function arraySorting(l3) {
//     for (let i = 0; i < l3.length; i++) {
//       for (let j = i + 1; j < l3.length; j++) {
//         if (l3[i] > l3[j]) {
//           let a = l3[i];
//           l3[i] = l3[j];
//           l3[j] = a;
//         }
//       }
//     }
//     return l3;
//   }
  
//   let l3 = [3, 16, 4, 11, 5, 92, 2, 6, 55, 3];
//   console.log(arraySorting(l3));
  
  

//  Array Filtering: Write a function to filter out even numbers from an array of integers and return a new array containing only the even numbers.
//  function evenArray(l3){
//     let a=l3.filter(ele=> ele%2===0);;
//     return a;
//  }
//  let l3 = [2, 1, 3, 4, 5, 6, 7, 8, 9]; 
//  console.log(evenArray(l3))




// const counterApp = {
//     value: 0,
//     increment() {
//         this.value += 1;
//         console.log(this.value);
//     },
//     decrement() {
//         this.value -= 1;
//         console.log(this.value);
//     },
//     reset() {
//         this.value = 0;
//         console.log(this.value);
//     },
// };

// counterApp.decrement()
// counterApp.increment()
// counterApp.decrement()
// counterApp.increment()
// counterApp.increment()
// counterApp.increment()
// counterApp.increment()
// counterApp.decrement()

// snake game functionality
// value=0
// ladder - value will increase by 10
// snake - value reset to 0
// radom between 1 to 6 // 6 Math.random
// move - increment the value by random number


// const snackGame = {
//     value: 0,
//     ladder() {
//         this.value += 10;
//         console.log("lader: ", this.value);
//     },
//     move() {
//         const randomNum = Math.floor(Math.random() * 6) + 1; 
//         console.log("Random number:", randomNum);
//         this.value+=randomNum;
//         console.log("newpalce : ",this.value);
//     },
//     reset() {
//         this.value = 0;
//         console.log("sncks : ",this.value);
//     }
// };
// snackGame.ladder()
// snackGame.move()
// snackGame.reset()
// snackGame.ladder()
// snackGame.ladder()
// snackGame.move()
// snackGame.ladder()
// snackGame.reset()


// deep Clone

// object.seal:-vauleupdate, not key update ,not delde
// object.entries
// Object.create :- mover in prototype
// why :object not repet
// prototype :- evey object is js has a prototype , and a prototype, and a prototype ic alsp a object.
// object.assign({},object1,object2)
//prototype chain

// fectory function :- return objrct

// consturctor function : is a reguluar function : new create  empty onject this ko as s key use krta h 
// 1. it create a new empty object
// 2. it attach that value of this keyword to the new empty object
// 3. it rerurn   the newly create object . it return this keyword.


// desrurctueting
// let arr=[1,2,3]
// let[f,s,t]=arr;
// console.log(f,s,t)



// method of list
// -------------------concat = marge the two value
let l=[1,2,34,4,5,7,8]
let l2=[2,3,4,5]
let l3=l.concat(l2)
console.log(l3)

// ----------------at(index number)= find the value of index number
console.log(l.at(2))

//-----------------push(element)= add on end of lisht
l2.push(345)
console.log(l2)

//----------------pop()= remove last element 
l2.pop()
console.log(l2)

//------------------shift()= remove the first element
l2.shift()
console.log(l2)

//------------------unshift() = add on starting of the list
l2.unshift(345)
console.log(l2)

//------------------slice (starting index , end index)
let a=l.slice(1,3)
console.log(a)

//-------------------splice(index, how many elemet remove)
let b=l.splice(1,3)
console.log(b)

//---------------------indexOf()= finde the index
let m=[2,3,4,5,6]
console.log(m.indexOf(6))

//------------------tostring()
console.log("string=",l.toString())





// method od string
//---------------------indexOf()= finde the index
let s="nishayadav_1_"
console.log(s.indexOf("_"))

//--------------------charAt(index)= find element
console.log(s.charAt(5))

//----------------------concat() =marge two strings
let s1="hagdfy";
console.log(s1.concat(s))

//-----------------------substring(start idex, end index)
console.log(s.substring(3,7))

//------------------------split(" wrna hai hich element se split k")=
console.log(s.split("a"))

//-----------------------toUpperCase()
console.log(s.toUpperCase())

//-----------------------toLowerCase()
console.log(s.toLowerCase())





//#-------------------------------------------------------------------------------------------------------






























