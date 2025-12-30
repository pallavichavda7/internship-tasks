//const objectName = {
  //property1: value1,
  //property2: value2,
//   const jsonString = JSON.stringify(userObject);
  //};

let obj1= {name:"Pallavi",
    age: 20,
    email:"chavdapahi@gmail.com",
    phone:8849067143 ,
    city: "Gandhinagar"};

let obj2= {name: "Kirti",    
    age:24,    
    email:"chavdakirti@gmail.com",  
    phone: 7876457871,    
    city: "Gandhidham"};

 let obj3= { name: "Harshad",  
    age: 26,   
    email:"chavdaharshad1@gmail.com",
    phone: 6359048227,    
    city: "Adipur"};

let obj4= {name:"Urvashi",
    age:18,email:"chavdaurvi1@gmail.com",
    phone:9925141462 , 
    city: "bhuj"};

let obj5= {  name: "Komal", 
    age: 19, 
    email:"chavdakomal@gmail.com",
    phone:7856256394 , 
    city: "Anjar"};


let obj6= {  name: "Dhaval", 
    age: 16, 
    email:"chavdadhaval1@gmail.com",
    phone: 7845963412, 
    city: "Atarnjal"};

let obj7= {  name: "Deepak", 
    age: 20, 
    email:"chavdadeepak1@gmail.com",
    phone: 7852965642,
    city: "Surat"};

let obj8= {  name: "Aravind", 
    age: 20, 
    email:"chauhanarvind@gmail.com",
    phone: 7825644596, 
    city: "Goa"};

let obj9= {  name: "Gaurav", 
    age: 21, 
    email:"parmargaurav1@gmail.com",
    phone: 9825149914, 
    city: "Mumbai"};

let obj10= {  name: "Raj", 
    age: 20, 
    email:"parmarraj1@gmail.com",
    phone:9924146569 , 
    city: "Pune"};

students = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10];

// Print all students above age 18
for (let i = 0; i < students.length; i++) {
if (students[i].age >18) {console.log("1. Students above age 18:", students[i].name)}};    

// Print all students from a specific city 
for (let i = 0; i < students.length; i++) {
if (students[i].city === "Gandhidham") {console.log( "2. Students from Gandhidham:",students[i].name)}};

// Print students whose name starts with “A”
console.log("3. Students whose name starts with A:" ); 
let foundStudentwA = students.find(student => student.name.startsWith("A"));
for (let i = 0; i < students.length; i++) {
    if (students[i].name.toUpperCase().startsWith("A")) {console.log(students[i].name)
        foundStudentwA = true;}
    };
    if (!foundStudentwA) {
        console.log("No student found whose name starts with A");};

// Print count of all students 
let studentCount = 10;
console.log(" 4 .Total number of students: " + studentCount);

// Print emails of all students 
console.log("5. Emails of all students:" );
for (let i = 0; i < students.length; i++) {
    console.log("Student Emails:", students[i].email);};


