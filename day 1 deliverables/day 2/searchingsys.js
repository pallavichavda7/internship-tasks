const studentsList = [
  { name: "Amit", age: 19, city: "Ahmedabad", email: "amit@gmail.com", phone: 9123456789, gender: "Male" },
  { name: "Riya", age: 17, city: "Surat", email: "riya@gmail.com", phone: 9876543210, gender: "Female" },
  { name: "Anjali", age: 21, city: "Ahmedabad", email: "anjali@gmail.com", phone: 9988776655, gender: "Female" },
  { name: "Karan", age: 22, city: "Rajkot", email: "karan@gmail.com", phone: 8899001122, gender: "Male" }
];


function searchStudent(keyword) {
  const result = studentsList.filter(s =>
    s.name.toLowerCase().includes(keyword.toLowerCase()) ||
    s.city.toLowerCase().includes(keyword.toLowerCase()) ||
    s.email.toLowerCase().includes(keyword.toLowerCase())
  );
  console.log(`Search Result for "${keyword}":`, result);
}

searchStudent("Ahmedabad");
searchStudent("Riya");
