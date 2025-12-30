// // Task 2: Operations on Students Array 
// Write functions: 
// function deleteStudentByName(name) {} 
// function updateCity(name, newCity) {} 
// function getStudentByEmail(email) {}  
// Test each function with console.log.
const studentsList = [
  { name: "Amit", age: 19, city: "Ahmedabad", email: "amit@gmail.com", phone: 9123456789, gender: "Male" },
  { name: "Riya", age: 17, city: "Surat", email: "riya@gmail.com", phone: 9876543210, gender: "Female" },
  { name: "Anjali", age: 21, city: "Ahmedabad", email: "anjali@gmail.com", phone: 9988776655, gender: "Female" },
  { name: "Karan", age: 22, city: "Rajkot", email: "karan@gmail.com", phone: 8899001122, gender: "Male" }
];

function addStudent(obj) {
  studentsList.push(obj);
}

function deleteStudentByName(name) {
  const index = studentsList.findIndex(s => s.name === name);
  if (index !== -1) studentsList.splice(index, 1);
}

function updateCity(name, newCity) {
  const student = studentsList.find(s => s.name === name);
  if (student) student.city = newCity;
}

function getStudentByEmail(email) {
  return studentsList.find(s => s.email === email);
}


addStudent({ name: "Akash", age: 20, city: "Vadodara", email: "akash@gmail.com", phone: 9011223344 });
console.log("\nAfter Adding Akash:", studentsList);

deleteStudentByName("Riya");
console.log("\nAfter Deleting Riya:", studentsList);

updateCity("Amit", "Gandhinagar");
console.log("\nAfter City Update:", studentsList);

console.log("\nGet by Email:", getStudentByEmail("anjali@gmail.com"));





// ✔ Task 4: Mini Project – Searching System 
// Create: 
// function searchStudent(keyword) {} 
 
// Where keyword is matched with: 
// name 
// city 
// email 
// Example: 
// searchStudent("Ahmedabad")   // should print all students from that city 
// searchStudent("Riya")        // should print Riya’s details 
 
// This logic will become an Express API later. 

// ✔ Task 5: Convert Your Student Manager System to Function-Based 

// Update yesterday’s day1_studentManager.js to fully function-based: 
// listAllStudents() 
// addStudent() 
// getStudentByName() 
// updateStudentEmail() 
// removeStudent() 
// Organize everything neatly. 

// 📂 DAY 2 Deliverables 
// Submit the following: 
// day2_studentLogic.js 
// Updated day1_studentManager.js 
// Output screenshots of all programs 
// Search system output 