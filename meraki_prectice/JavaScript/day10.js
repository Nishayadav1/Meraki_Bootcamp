// let fName = "Shrutika";

// function sayHello() {
//     fName = "Vishakha";

//     let message = "Hello " + fName;
//     console.log(message);
// }
// console.log(fName);
// sayHello();
// console.log(fName);



// Parameters and Arguments

// function greet(name) {
//     console.log("Hello " + name);
// }
// greet('Alka');
// greet(12);
// greet('Sushmita');

// function greet(city) {
//     console.log("I belongs to " + city);
// }
// greet('Pune');
// greet();
// greet('Mumbai', 'Pune');
// greet('Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Satara');

// function greet(city, country) {
//     console.log("I belongs to " + city + " in " + country);
// }
// greet('Pune', 'India');
// greet('Delhi');
// greet();
// greet("", "India");
// greet(undefined, "India");
// greet(, "India");

// function age(name, age) {
//     console.log(name + " is a good boy");
// }
// age('Rajkumar', 20);

// function greet(fName, age) {
//     fName = "Hi" + fName;
//     console.log(fName + age);
// }
// var fName = "Gayatri";
// greet(fName, 20);
// console.log(fName);

// function greet(fName, age = 22) {
//     console.log("Hello " + fName + " you are " + age + " years old");
// }
// greet("Nikita");
// greet("Nikita", 20);
// greet("Eram", undefined);
// greet("Eram", null);
// greet("Eram", false);


// null vs undefined
// undefined vs not defined

// function place(city, country) {
//     if(country === undefined) {
//         country = 'China';
//     }
//     console.log("I belongs to " + city + " in " + country);
// }
// place('Mumbai', 'India');
// place('Delhi');

function place(city, country) {
    country = country || 'China';
    console.log("I belongs to " + city + " in " + country);
}
place("Delhi");