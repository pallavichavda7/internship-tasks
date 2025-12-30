const express = require (express );
const app = express ();

app.use(express.json()); // to read JSON body
app.use(express.urlencoded({ extended: true }));
app.get('/hello/id/hello', (req, res) => {

    console. log(req.body);
res. json({
course: "MERN Internship", duration: "15 Days"
}) ;
}) ;
app.get('/student/:id', (req, res) => {
res. send("Student ID received: " + req. params.id);
}) ;
app.post ('/add'
, (req, res) => {
   let data = req.body;
res. json({ message: "Data received", data });
}) ;
app. listen (3000, () => {
console. log("Server is running on port 3000");
}) ;