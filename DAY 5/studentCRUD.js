const fs = require("fs");
const validator = require("validator");
const { readJSON, writeJSON } = require("./fileManager");

let students = require("../day5/data/students.json");

const DATA_FILE = "./data/students.json";

// 🔒 Auto Backup
function createBackup() {
  const time = Date.now();
  fs.copyFileSync(DATA_FILE, `./data/backups/students_backup_${time}.json`);
}

// READ
function getAllStudents() {
  return readJSON(DATA_FILE);
}

// CREATE
function addStudent(student) {
  createBackup();
  let students = getAllStudents();

  if (!validator.isEmail(student.email)) {
    console.log("❌ Invalid email");
    return;
  }

  students.push(student);
  writeJSON(DATA_FILE, students);
}

// UPDATE
function updateStudent(name, newData) {
  createBackup();
  let students = getAllStudents();

  students = students.map(s =>
    s.name === name ? { ...s, ...newData } : s
  );

  writeJSON(DATA_FILE, students);
}

// DELETE
function deleteStudent(name) {
  createBackup();
  let students = getAllStudents();
  students = students.filter(s => s.name !== name);
  writeJSON(DATA_FILE, students);
}

// SEARCH
function searchStudent(keyword) {
  let students = getAllStudents();
  return students.filter(s =>
    s.name.toLowerCase().includes(keyword.toLowerCase()) ||
    s.city.toLowerCase().includes(keyword.toLowerCase()) ||
    s.email.toLowerCase().includes(keyword.toLowerCase())
  );
}

module.exports = {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
  searchStudent
};
