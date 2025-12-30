const express = require("express");
const router = express.Router();
const crud = require("../studentCRUD");
const Student = require("../models/studentModel");

// CRUD
router.get("/students", (req, res) => {
  res.json(crud.getAllStudents());
});

router.post("/students", require("../middlewares/validateFields"), (req, res) => {
  crud.addStudent(req.body);
  res.json({ message: "Student added" });
});

router.put("/students/:name", (req, res) => {
  crud.updateStudent(req.params.name, req.body);
  res.json({ message: "Student updated" });
});

router.delete("/students/:name", (req, res) => {
  crud.deleteStudent(req.params.name);
  res.json({ message: "Student deleted" });
});

// Search APIs
router.get("/students/search/:keyword", (req, res) => {
  res.json(crud.searchStudent(req.params.keyword));
});

router.get("/students/age/:age", (req, res) => {
  const age = Number(req.params.age);
  const students = crud.getAllStudents().filter(s => s.age >= age);
  res.json(students);
});

// Stats API
router.get("/students/stats", (req, res) => {
  const students = crud.getAllStudents();
  res.json({
    total: students.length,
    adults: students.filter(s => s.age >= 18).length,
    uniqueCities: [...new Set(students.map(s => s.city))],
    minAge: Math.min(...students.map(s => s.age)),
    maxAge: Math.max(...students.map(s => s.age))
  });
});



router.get("/students/search", (req, res) => {
  const { name, email, city, min, max, sort } = req.query;
  let students = crud.getAllStudents();

  if (name) students = students.filter(s => s.name.includes(name));
  if (email) students = students.filter(s => s.email.includes(email));
  if (city) students = students.filter(s => s.city === city);
  if (min) students = students.filter(s => s.age >= min);
  if (max) students = students.filter(s => s.age <= max);
  if (sort === "age") students.sort((a, b) => a.age - b.age);

  res.json(students);
});

router.get("/students/sort/age", async (req, res) => {
  res.json(await Student.find().sort({ age: 1 }));
});

module.exports = router;
console.log("students routes file loaded");
