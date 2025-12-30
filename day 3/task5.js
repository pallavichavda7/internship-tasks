const students = [
  { name: "Pallavi", age: 20, email: "pallavi@gmail.com", phone: 1111, city: "Ahmedabad" },
  { name: "Riya", age: 17, email: "riya123@yahoo.com", phone:2222 , city: "Gandhinagar" },
  { name: "Aman", age: 22, email: "aman@gmail.com", phone: 3333, city: "Ahmedabad" },
  { name: "Kiran", age: 19, email: "kiran@gmail.com", phone: 4444, city: "Surat" }
];

import { writeFileSync } from "fs";
//const fs = require("fs");


// Remove duplicates by email
const uniqueStudents = Array.from(
  new Map(students.map(s => [s.email, s])).values()
);

// Remove invalid emails
const cleanedStudents = uniqueStudents.filter(s =>
  s.email.includes("@") && s.email.includes(".")
);

writeFileSync("students_updated.json", JSON.stringify(students, null, 2));
writeFileSync("students_cleaned.json", JSON.stringify(cleanedStudents, null, 2));