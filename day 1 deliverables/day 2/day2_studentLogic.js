// ✔ Task 3: Create a New File → day2_studentLogic.js 
// Inside this file, write: 
// 🔹 5 Programs Using Conditions 
// Examples: 
// Check if student is from Gujarat 
// Check if age is valid (should be ≥ 0) 
// Check if email contains “@” 
// 🔹 5 Programs Using Loops 
// Examples: 
// Print all student names 
// Print all unique cities 
// Find students older than 20 
// Print all students with phone numbers starting with 9 
// Count male/female students (if gender added) 

const students = [
    { name: "Pallavi", 
        age: 22, 
        email: "pallavi@gmail.com" ,
        city: "Ahmedabad",
        phone: 9876543210
    },
    {  name: "Aarav", 
        age: 19, 
        email: "aarav@gmail.com",
        city: "Surat",
        Phone: 8765432109    
    },
    { name: "Riya", 
        age: 21, 
        email: "riya@gmail.com",
        city: "Vadodara",
        phone: 7654321098}
];
//✔ Task 3: Conditions & Loops
//🔹 5 Programs Using Conditions
studentsList.forEach(s => {
  if (s.city === "Ahmedabad") console.log(`${s.name} is from Gujarat`);
});

studentsList.forEach(s => {
  if (s.age >= 0) console.log(`${s.name} age is valid`);
});

studentsList.forEach(s => {
  if (s.email.includes("@")) console.log(`${s.name} email is valid`);
});

//🔹 5 Programs Using Loops
// Print all names
studentsList.forEach(s => console.log(s.name));

// Unique cities
const cities = [...new Set(studentsList.map(s => s.city))];
console.log("Unique Cities:", cities);

// Students older than 20
studentsList.filter(s => s.age > 20).forEach(s => console.log(s.name));

// Phone starting with 9
studentsList.filter(s => String(s.phone).startsWith("9")).forEach(s => console.log(s.name));

// Count male/female
let male = 0, female = 0;
studentsList.forEach(s => {
  if (s.gender === "Male") male++;
  if (s.gender === "Female") female++;
});
console.log(`Male: ${male}, Female: ${female}`);

