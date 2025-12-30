🎯 DAY 5 PRACTICE & PROJECT TASKS (6 HOURS) 
 
✔ Task 1: Initialize package.json 
Inside your project folder: 
npm init -y 
 
 
✔ Task 2: Install 3 npm packages 
Install any three, such as: 
npm install nodemon 
npm install colors 
npm install validator 
 
Test them in a new file testNPM.js. 
 
✔ Task 3: Create fileManager.js exactly as taught 
Include: 
readJSON() 
writeJSON() 
appendText() 
 
✔ Task 4: Build studentCRUD.js 
Functions required: 
getAllStudents() 
addStudent(studentObject) 
updateStudent(name, newData) 
deleteStudent(name) 
searchStudent(keyword) 
 
✔ Task 5: Create CRUD Test File → crudTester.js 
Write test cases: 
Add 5 new students 
Update a student's city 
Delete a student 
Search student by name/email/city 
Print updated student list 
 
✔ Task 6: Create Daily Auto Backup 
Each time CRUD functions run, create: 
data/students_backup_<timestamp>.json 
 
Example code: 
const time = Date.now(); 
fs.copyFileSync('data/students.json', `data/students_backup_${time}.json`); 
 
 
✔ Task 7: Clean Students Data 
Create: 
students_cleaned.json → Remove duplicate emails 
students_valid.json → Remove invalid emails (use validator package) 
 
----------------------------------------------- 
📂 DAY 5 Deliverables 
Submit: 
fileManager.js 
studentCRUD.js 
crudTester.js 
npm installed package list 
students_backup files 
Cleaned JSON files 
 
----------------------------------------------- 
▶️ Day 5 YouTube Learning Links 
npm & package.json Explained 
https://www.youtube.com/watch?v=jHDhaSSKmB0 
Node.js Modules (require/export) 
https://www.youtube.com/watch?v=xHLd36QoS4k 
Node File System (fs) 
https://www.youtube.com/watch?v=BUAhpB3FmS4 
Beginner CRUD Logic in JS 
https://www.youtube.com/watch?v=lI1ae4REbFM 
NPM Crash Course
344.9K views · 8 years ago
 
5. Creating a File-Based CRUD System 
Before learning Express.js, you must understand how data flows in a real backend. 
Your CRUD today will manage students.json using Node.js. 
Create a folder structure: 
internship-project/ 
   |– data/ 
   |     |– students.json 
   |– utils/ 
   |     |– fileManager.js 
   |– crud/ 
   |     |– studentCRUD.js 
   |– app.js 
   |– package.json 
 
 
⭐ fileManager.js 
const fs = require('fs'); 
 
function readJSON(path) { 
  let data = fs.readFileSync(path); 
  return JSON.parse(data); 
} 
 
function writeJSON(path, 	) { 
  fs.writeFileSync(path, JSON.stringify(data, null, 2)); 
} 
 
module.exports = { readJSON, writeJSON }; 
 
 
⭐ studentCRUD.js 
const file = require('../utils/fileManager'); 
const path = './data/students.json'; 
 
function getAllStudents() { 
  return file.readJSON(path); 
} 
 
function addStudent(student) { 
  let students = getAllStudents(); 
  students.push(student); 
  file.writeJSON(path, students); 
  return student; 
} 
 
function updateStudent(name, newData) { 
  let students = getAllStudents(); 
   
  for (let i = 0; i < students.length; i++) { 
    if (students[i].name === name) { 
      students[i] = { ...students[i], ...newData }; 
      break; 
    } 
  } 
 
  file.writeJSON(path, students); 
} 
 
function deleteStudent(name) { 
  let students = getAllStudents(); 
  students = students.filter(s => s.name !== name); 
  file.writeJSON(path, students); 
} 
 
module.exports = { getAllStudents, addStudent, updateStudent, deleteStudent }; 
 
 
⭐ app.js (Testing the CRUD) 
const crud = require('./crud/studentCRUD'); 
 
// Add Student 
crud.addStudent({ 
  name: "New Student", 
  age: 20, 
  email: "new@test.com", 
  city: "Vadodara" 
}); 
 
// Display All Students 
console.log(crud.getAllStudents()); 
 
// Update Student 
crud.updateStudent("New Student", { city: "Surat" }); 
 
// Delete Student 
crud.deleteStudent("New Student"); 
 
This simulates how a backend API handles database operations. 
 