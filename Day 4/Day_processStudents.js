// Use both modules: 
const file = require('./fileManager'); 
let students = file.readJSON('./data/students.json'); 
 
console.log("Total:", students.length); 
 
// Add logic to: 
// Print all student names 
students.forEach(student => console.log(student.name)); 

// Add a new student 
const newStudent = { id: 3, name: "Charlie", grade: "C" };
students.push(newStudent);

// Save updated list back to the file 
file.writeJSON('./data/students.json', students);

// Automatically create a backup before changes: 
 fs.copyFileSync('students.json', 'students_backup.json'); 