
const students = [
  { name: "Pallavi", age: 20, email: "pallavi@gmail.com", phone: 1111, city: "Ahmedabad" },
  { name: "Riya", age: 17, email: "riya@yahoo.com", phone: 2222, city: "Gandhinagar" },
  { name: "Aman", age: 22, email: "aman@gmail.com", phone: 3333, city: "Ahmedabad" },
  { name: "Kiran", age: 19, email: "kiran@gmail.com", phone: 4444, city: "Surat" }
];
// 15 FUNCTION-BASED PROGRAMS

function getTotalStudents(list) {
  return list.length;
}
console.log("1.Total Students:", getTotalStudents(students));

function getNamesList(list) {
  return list.map(s => s.name);
}
console.log("2.Names List:", getNamesList(students));

function getEmailsList(list) {
  return list.map(s => s.email);
}
console.log("3.Emails List:", getEmailsList(students));

function getStudentsAboveAge(list, age) {
  return list.filter(s => s.age > age);
}


console.log("4.Students Above Age 18:", getStudentsAboveAge(students, 18));


function getStudentsBelowAge(list, age) {
  return list.filter(s => s.age < age);
}
console.log("Students Below Age 18:", getStudentsBelowAge(students, 18));



function getUniqueCities(list) {
  return [...new Set(list.map(s => s.city))];
}
console.log("Unique Cities:", getUniqueCities(students));


function countStudentsByCity(list, city) {
  return list.filter(s => s.city.toLowerCase() === city.toLowerCase()).length;
}
console.log("Count from Ahmedabad:", countStudentsByCity(students, "Ahmedabad"));

function findLongestName(list) {
  return list.reduce((a, b) => a.name.length > b.name.length ? a : b).name;
}
console.log("Longest Name:", findLongestName(students));


function findShortestName(list) {
  return list.reduce((a, b) => a.name.length < b.name.length ? a : b).name;
}

console.log("Shortest Name:", findShortestName(students));

function updatePhoneNumber(list, name, phone) {
  list.forEach(s => { if (s.name === name) s.phone = phone; });
  return list;
}

console.log("After Phone Update:",
  updatePhoneNumber(students, "Pallavi", 9999)
);

function updateEmail(list, name, email) {
  list.forEach(s => { if (s.name === name) s.email = email; });
  return list;
}
console.log("After Email Update:",
  updateEmail(students, "Riya", "riya123@gmail.com")
);


function removeStudent(list, name) {
  return list.filter(s => s.name !== name);
}
console.log("After Removing Aman:",
  removeStudent(students, "Aman")
);


function searchStudents(list, keyword) {
  keyword = keyword.toLowerCase();
  return list.filter(s =>
    s.name.toLowerCase().includes(keyword) ||
    s.email.toLowerCase().includes(keyword) ||
    s.city.toLowerCase().includes(keyword) ||
    String(s.phone).includes(keyword)
  );
}

console.log("Search keyword 'ahm':",
  searchStudents(students, "ahm")
);

function listStudentsAlphabetically(list) {
  return [...list].sort((a, b) => a.name.localeCompare(b.name));
}

console.log("Alphabetical Order:",
  listStudentsAlphabetically(students)
);
function listStudentsByAgeOrder(list) {
  return [...list].sort((a, b) => a.age - b.age);
}
console.log("Age-wise Order:",
  listStudentsByAgeOrder(students)
);
