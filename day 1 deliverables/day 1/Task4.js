//screen shot all outputs in console
// 1.Print all student names 
// 2.Print students older than 20 
// 3.Add a student into the array 
// 4.Delete a student 
// 5.Update a student’s email 
// 6.Search student by name 
// 7.Count total students 
// 8.Make an array of all cities 
// 9.Filter students from “Ahmedabad” 
// 10.Convert a student object to JSON string 

let students = [
    { name: "chavda dhaval", 
        age: 21, 
        email: "chavda123@gmail.com", 
        phone: 9876543210, 
        city: "Ahmedabad" },
    { name: "parmar rahul", 
        age: 19, 
        email:"parmarrahul@gmail.com",
        phone: 8765432109,
        city: "Surat" },
    { name: "chauhan komal",
        age: 22,
        email:"chavdakomal@gmail.com",
        phone: 7654321098,
        city: "Ahmedabad" }
        ];

  // 1. Print all student names
  for (let i = 0; i < students.length; i++) {
    console.log("1","Student Names:", students[i].name);};

// 2.Print students older than 20 
const olderThan20 = students.filter(student => student.age > 20);
console.log("2.Students older than 20:", olderThan20);


// 3.Add a student into the array 
 students.push( { name: "sonal chauhan",
age: 20,
email:"Chauhansonal@gmail.com",
phone: 7854123690,
city: "Goa"});
console.log("3.New add students Updatated list:",students);


// 4.Delete a student
const nameToDelete = "parmar rahul";
const updatedList = students.filter(student => student.name !== nameToDelete);
console.log( "4.after deleted by name parmar rahul Updatedlist ",updatedList);

// 5.Update a student’s email 
const nameToUpdate = "chavda dhaval";
students.forEach(student => {
    if (student.name === nameToUpdate) {
        student.email = "chavdadhaval12@gmail.com";}});
console.log( " 5.email updated of chavda dhaval",students);
// 6.Search student by name
const nameToSearch = "chauhan komal";
const foundStudent = students.find(student => student.name === nameToSearch);
console.log("6.Found Student:", foundStudent);

// 7.Count total students
console.log("7.Total Students:", students.length);

// 8.Make an array of all cities
const cities = students.map(student => student.city);
console.log(" 8.All Cities:", cities );

// 9.Filter students from “Ahmedabad”
const fromAhmedabad = students.filter(student => student.city === "Ahmedabad");
console.log( "9.students from ahm",fromAhmedabad);

// 10.Convert a student object to JSON string
const JSONString = JSON.stringify(students[0]);
console.log("10.JSON String:", JSONString);