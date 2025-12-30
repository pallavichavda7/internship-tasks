const express = require("express");
const app = express();

app.use(express.json());

// Test server
app.get("/", (req, res) => {
  res.send("🚀 Server is running on port 3000");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});

app.get("/about", (req, res) => {
  res.send("Student Backend API - Day 6 Express Practice");
});

app.get("/student/:id", (req, res) => {
  res.json({ studentId: req.params.id });
});

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.get("/test/json", (req, res) => {
  res.json({
    status: "success",
    message: "JSON API working",
    time: new Date()
  });
});

const studentRoutes = require("./routes/studentRoutes");
app.use("/", studentRoutes);
