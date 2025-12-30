// Variables – Practical Tasks (10 Tasks)
//1. Declare 3 variables using let, const, and var and print their values.

let a_name = "Janvi";
const pi = 3.14;
var isStudent = true;

console.log(a_name);
console.log(pi);
console.log(isStudent);
// 2.Swap values between two variables without using a third variable.

let a = 5;
let b = 10;
a = a + b; // a now becomes 15
b = a - b; // b becomes 5
a = a - b; // a becomes 10
console.log("a:", a, "b:", b);

// 3.Create a variable holding a user’s age and check if they are an adult.

let userAge = 20;
if (userAge >= 18) {console.log("User is an adult.");}
else {console.log("User is not an adult.");}

// 4.Update the value of a let variable but try to update a const variable and observe.
let score = 50;
score = 75; // This works
console.log("Updated score:", score);
  //const maxScore = 100;
//maxScore = 150; // This will be error type error assigning to constant variable
console.log("Const variable cannot be updated.");

// 5.Declare a variable and store the result of math operations (+, -, *, /).
let num1 = 20;
let num2 = 5;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);


// 6.Create a variable that stores the length of a string.
const myString = "Hello, World!";
const stringLength = myString.length;
console.log("Length of string:", stringLength);

// 7.Store a full name in a variable and extract the first name.
const fullName = "pseudo code";
const firstName = fullName.split(" ")[0];
console.log("First name:", firstName);

// 8.Declare a variable that stores an array and print its first element.
const fruits = ["Apple", "Banana", "Cherry"];
console.log("First fruit:", fruits[0]);


// 9.Store today’s date in a variable and print it.
const today_New = new Date();
console.log("Today's date:", today_New.toDateString());

// 10.Declare a boolean variable and toggle it (true → false or false → true).

let isOnline = true;
isOnline = !isOnline;
console.log("Is online:", isOnline);


// Datatypes – Practical Tasks (10 Tasks)
//1. Create variables for each datatype: string, number, boolean, null, undefined, symbol, bigint.
//2. Check the datatype of each variable using typeof.

let myStringVar = "Hello, JavaScript!";
let myNumberVar = 42;
let myBooleanVar = true;
let myNullVar = null;
let myUndefinedVar;
let mySymbolVar = Symbol("Myproperty");
let myBigIntVar = 9007199254740991n;

console.log('1',"String:", myStringVar ,"Number:",myNumberVar, "Boolean:", myBooleanVar, "Null:", myNullVar, "Undefined:", myUndefinedVar, "Symbol:", mySymbolVar, "BigInt:", myBigIntVar);


console.log("2.Type of myStringVar:", typeof myStringVar);
//3. Create two string variables and join them.
let str1 = "Hello, ";
let str2 = "World!";
console.log("3.Joined String:", str1 + str2);

//4. Store a number as a string and convert it to a number.
let numAsString = "123";
let convertedNumber = Number(numAsString);
console.log("4.Converted Number:", convertedNumber);

//5. Create a bigint number and perform addition with another bigint.
let bigInt1 = 9007199254740991n;
let bigInt2 = 1000000696446544n;
let bigIntSum = bigInt1 + bigInt2;
console.log("5.BigInt Sum:", bigIntSum);
//6. Create an undefined variable and then assign a value to it later.

let undefinedVar;
undefinedVar = "Now I have a value!";
console.log("6.Undefined variable after assignment:", undefinedVar);

//7. Create a boolean variable and flip its value using !.
let isAvailable = false;
isAvailable = !isAvailable;
console.log("7.Flipped Boolean:", isAvailable);
//8. Create an object and show that its type is “object”.
let myObject_ = {name: "Alice", age: 30};
console.log("8.Type of myObject:", typeof myObject_);
// 9.Create an array and show that its type is also “object”.
let myArray = [1, 2, 3, 4, 5];
console.log("9.Type of myArray:", typeof myArray);

// 10. Compare a number and a string using == and === and observe the difference.
let numValue = 100;
let strValue = "100";
console.log("10.Loose Equality (==):", numValue == strValue); // true
console.log("Strict Equality (===):", numValue === strValue); // false

// 🧱 Object – Practical Tasks (10 Tasks)
//1. Create an object representing a car with brand, model, and year.
let car = {
    nameofcar: "Honda civic",
    brand: "Toyota", model: "Camry", year: 2020};
// 2.Add a new property to an existing object.
car.color = "Red";
// 3.Delete a property from an object.
delete car.year;
// 4.Loop through all properties of an object and print their values.
for (let key in car) {
    console.log(`${key}: ${car[key]}`);};
//5. Create an object with a function inside and call that function.
let person = { nameOfperson: "Pallavi", 
    greet: function() {console.log("Hello, " + this.nameOfperson + "!");}};
person.greet();

// 6.Access an object property using both dot and bracket notation.
console.log("Dot notation:", car.brand);
console.log("Bracket notation:", car["model"]);

//7. Create a nested object (object inside object) and access child properties.

let student_info = {
    nameOfstudent: "Rohan",
    address: "ahmedabad",
    grades: "8.9 CGPA",
    contact: "7359049227",
    email:"rohansharma@gmail.com",
    hobies: { dancing: true, singing: false, gaming: true, painting: false,
        coding: true, reading: true
    }
};
console.log("Nested Object Property - Name:", student_info.nameOfstudent);

//8. Freeze an object using Object.freeze() and try to modify it.
//9. Merge two objects using the spread operator ({...obj1, ...obj2}).
// 10Create an array of objects and print the object with the highest value of a property.

// 🟧 Array – Practical Tasks (10 Tasks)
// Create an array of 5 fruits and print the third fruit.
// Add an item to the array using .push() and remove one using .pop().
// Use .shift() to remove the first element and .unshift() to add one.
// Loop through an array and print only the even numbers.
// Find the maximum number in an array.
// Convert an array to a comma-separated string using .join().
// Merge two arrays using the spread operator.
// Filter an array to keep only values greater than 10.
// Map an array of numbers to their squares.
// Sort an array of strings alphabetically


// Create a JSON string representing a student with name, age, and marks. Parse it into JavaScript.
// Convert a JavaScript object into JSON and save it in a variable.
// Given a JSON string containing an array of products, parse it and print only the product names.
// Update a value inside a JSON-parsed object and convert it back to JSON.
// Create JSON representing a person with multiple addresses (nested objects).
// Parse a JSON string that contains an array of users; print the second user’s email.
// Convert an array of numbers into JSON and back into a JavaScript array.
// Create JSON data for a book library and loop through all book titles.
// Store a JSON string with boolean, null, number, and string values. Parse and access each value.
// Create JSON for an order containing items, price, and quantity; calculate total using JS variables.