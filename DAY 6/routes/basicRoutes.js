const express = require("express");
const router = express.Router();

// GET /
router.get("/", (req, res) => {
  res.send("Welcome to Express Course API");
});

// GET /about
router.get("/about", (req, res) => {
  res.send("This is a backend Express learning course");
});

// GET /student/:id
router.get("/student/:id", (req, res) => {
  res.send(`Student ID received: ${req.params.id}`);
});

// POST /echo
router.post("/echo", (req, res) => {
  res.json(req.body);
});

// GET /test/json
router.get("/test/json", (req, res) => {
  res.json({
    status: "success",
    message: "JSON working fine"
  });
});

module.exports = router;