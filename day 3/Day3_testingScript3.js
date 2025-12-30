const processor = require("./studentProcessor2");

console.log("Adult Students:", processor.getAdultStudents(processor.students));
console.log("Students from Ahmedabad:", processor.getStudentsByCity(processor.students, "Ahmedabad"));
console.log("Search gmail:", processor.searchStudents(processor.students, "gmail"));
console.log("Find Pallavi:", processor.getStudentByName(processor.students, "Pallavi"));

//TASK 4: ADVANCED SEARCH LOGIC (Already Covered)
// Phone search
// City + Age
// Partial email
// Name search


searchStudents(students, "gmail");
searchStudents(students, "ahmedabad");
searchStudents(students, "2222");

console.log("Search 'gmail':", processor.searchStudents(processor.students, "gmail"));
console.log("Search 'ahmedabad':", processor.searchStudents(processor.students, "ahmedabad"));
console.log("Search '2222':", processor.searchStudents(processor.students, "2222"));