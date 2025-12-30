const students = [
  { name: "Pallavi", age: 20, email: "pallavi@gmail.com", phone: 1111, city: "Ahmedabad" },
  { name: "Riya", age: 17, email: "riya@yahoo.com", phone: 2222, city: "Gandhinagar" },
  { name: "Aman", age: 22, email: "aman@gmail.com", phone: 3333, city: "Ahmedabad" },
  { name: "Kiran", age: 19, email: "kiran@gmail.com", phone: 4444, city: "Surat" }
];

// TASK 2
function getAllStudents(list) {
  return list;
}

function getAdultStudents(list) {
  return list.filter(s => s.age >= 18);
}

function getStudentsByCity(list, city) {
  return list.filter(s => s.city.toLowerCase() === city.toLowerCase());
}

function getStudentByName(list, name) {
  return list.find(s => s.name.toLowerCase() === name.toLowerCase());
}

function updateStudentDetails(list, name, updates) {
  list.forEach(s => {
    if (s.name === name) {
      Object.assign(s, updates);
    }
  });
  return list;
}

function deleteStudent(list, name) {
  return list.filter(s => s.name !== name);
}

function searchStudents(list, keyword) {
  keyword = keyword.toLowerCase();
  return list.filter(s =>
    s.name.toLowerCase().includes(keyword) ||
    s.email.toLowerCase().includes(keyword) ||
    s.city.toLowerCase().includes(keyword) ||
    String(s.phone).includes(keyword)
  );
}

// FUNCTION CALLS 

console.log("All Students:", getAllStudents(students));

console.log("Adult Students (18+):", getAdultStudents(students));

console.log("Students from Ahmedabad:", getStudentsByCity(students, "Ahmedabad"));

console.log("Student named Pallavi:", getStudentByName(students, "Pallavi"));

console.log(
  "After Updating Kiran:",
  updateStudentDetails(students, "Kiran", { age: 21, city: "Vadodara" })
);

console.log(
  "After Deleting Aman:",
  deleteStudent(students, "Aman")
);

console.log(
  "Search keyword 'gmail':",
  searchStudents(students, "gmail")
);

//exporting functions for external use
module.exports = {
  getAllStudents,
  getAdultStudents,
  getStudentsByCity,
  getStudentByName,
  updateStudentDetails,
  deleteStudent,
  searchStudents
};
