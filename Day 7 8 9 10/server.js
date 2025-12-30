const express = require("express");
const app = express();
const logger = require("./middlewares/logger");
const time = require("./middlewares/time");
const counter = require("./middlewares/counter");
const emptyBody = require("./middlewares/emptyBody");

app.use(express.json());
app.use(logger);
app.use(counter);
app.use(time);
app.use(emptyBody);

// routes
const studentRoutes = require("./routes/student.routes");
app.use("/", studentRoutes);

// server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});