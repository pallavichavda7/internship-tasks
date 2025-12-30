let students = require("./data/students.json");

function getAllStudents() {
  return students;
}

function addStudent(student) {
  students.push(student);
  return students;
}

function deleteStudent(name) {
  students = students.filter(s => s.name !== name);
  return students;
}

function updateStudent(name, newCity) {
  students.forEach(s => {
    if (s.name === name) s.city = newCity;
  });
  return students;
}

function searchStudent(keyword) {
  return students.filter(s =>
    s.name.toLowerCase().includes(keyword.toLowerCase())
  );
}

module.exports = {
  getAllStudents,
  addStudent,
  deleteStudent,
  updateStudent,
  searchStudent
};
