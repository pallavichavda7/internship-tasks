const crud = require("./studentCRUD");

console.log("Initial Students:");
console.log(crud.getAllStudents());

// ADD
crud.addStudent({
  name: "Neha",
  age: 19,
  email: "neha@gmail.com",
  city: "Rajkot"
});

crud.addStudent({
  name: "Kiran",
  age: 23,
  email: "invalid-email",
  city: "Vadodara"
});

// UPDATE
crud.updateStudent("Riya", { city: "Ahmedabad" });

// DELETE
crud.deleteStudent("Amit");

// SEARCH
console.log("\nSearch Ahmedabad:");
console.log(crud.searchStudent("Ahmedabad"));

console.log("\nFinal Students:");
console.log(crud.getAllStudents());
