// Task 5: Mini Console Program – Student Manager 
const students = [
    { name: "Pallavi", 
        age: 22, 
        email: "pallavi@gmail.com" ,
        city: "Ahmedabad",
        phone: 9876543210
    },
    {  name: "Aarav", 
        age: 19, 
        email: "aarav@gmail.com",
        city: "Surat",
        Phone: 8765432109    
    },
    { name: "Riya", 
        age: 21, 
        email: "riya@gmail.com",
        city: "Vadodara",
        phone: 7654321098}
];

// 1. List All Students
function listAllStudents() {
    console.log("All Students:");
    for (let i = 0; i < students.length; i++) {
        console.log(students[i]);
    }
}
// List  students
listAllStudents();


// 2. Add a new student
let newStudent = { name: "Mehul", 
    age: 20, 
    email:"mehul@gmail.com",
    city: "Rajkot",
    phone: 6543210987}; 
function addStudent(name, age, email) {
    students.push(newStudent);
    console.log("Student Added:", newStudent);
}
// Add a student
addStudent("Mehul", 20, "mehul@mail.com");


// 3. Get Student By Name
function getStudentByName(searchName) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name.toLowerCase() === searchName.toLowerCase()) {
            console.log("Student Found:", students[i]);
            return students[i];
        }
    }
    console.log("No student found with name:", searchName);
    return null;
}
// Search student
getStudentByName("Riya");


// 4. Update Student Email
function updateStudentEmail(name, newEmail) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name.toLowerCase() === name.toLowerCase()) {
            students[i].email = newEmail;
            console.log("Email Updated:", students[i]);
            return;
        }
    }
    console.log("Cannot update. Student not found:", name);
}
// Update email
updateStudentEmail("Pallavi", "newpallavi@mail.com");

// List after updates
listAllStudents();


// adult check
for(let i=0; i<students.length; i++){
    checkAdultStatus(students[i].age, students[i].name);
}



// using fuction
function checkAdultStatus(age, name) {
    if (age >= 18) 
        return console.log(name + " is an adult.")};

// Update yesterday’s day1_studentManager.js to fully function-based: 
// listAllStudents() 
// addStudent() 
// getStudentByName() 
// updateStudentEmail() 
// removeStudent() 
// Organize everything neatly. 

studentsList.forEach(s => {
  if (s.city === "Ahmedabad") console.log(`${s.name} is from Gujarat`);
});

studentsList.forEach(s => {
  if (s.age >= 0) console.log(`${s.name} age is valid`);
});

studentsList.forEach(s => {
  if (s.email.includes("@")) console.log(`${s.name} email is valid`);
});

//🔹 5 Programs Using Loops
// Print all names
studentsList.forEach(s => console.log(s.name));

// Unique cities
const cities = [...new Set(studentsList.map(s => s.city))];
console.log("Unique Cities:", cities);

// Students older than 20
studentsList.filter(s => s.age > 20).forEach(s => console.log(s.name));

// Phone starting with 9
studentsList.filter(s => String(s.phone).startsWith("9")).forEach(s => console.log(s.name));

// Count male/female
let male = 0, female = 0;
studentsList.forEach(s => {
  if (s.gender === "Male") male++;
  if (s.gender === "Female") female++;
});
console.log(`Male: ${male}, Female: ${female}`);
