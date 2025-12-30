const express = require("express");
const router = express.Router();

const crud = require("../studentCRUD");

// GET all students
router.get("/students", (req, res) => {
  res.json(crud.getAllStudents());
});

// POST add student
router.post("/students", (req, res) => {
  crud.addStudent(req.body);
  res.json({ message: "Student added" });
});

// GET student by name
router.get("/students/:name", (req, res) => {
  const result = crud.searchStudent(req.params.name);
  res.json(result);
});

// GET students by city
router.get("/students/city/:city", (req, res) => {
  const result = crud.searchStudent(req.params.city);
  res.json(result);
});

module.exports = router;

router.get("/students/stats", (req, res) => {
  const students = crud.getAllStudents();

  const total = students.length;
  const adults = students.filter(s => s.age >= 18).length;
  const cities = [...new Set(students.map(s => s.city))];

  res.json({
    total,
    adults,
    cities
  });
});
