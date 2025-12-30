const fs = require('fs');
const path = require('path');

// 1. Print your name
console.log("Pallavi");

// 2. Add two numbers
const a = 5, b = 7;
console.log("Sum:", a + b);

// 3. Print today’s date
console.log("Today's Date:", new Date().toLocaleDateString());

// 4. Print the length of students array
const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 21 },
    { name: "Charlie", age: 22 }
];
console.log("Number of students:", students.length);

// 5. Loop over student objects
students.forEach(student => {
    console.log(`Name: ${student.name}, Age: ${student.age}`);
});

// 6. Read a file
const filePath = path.join(__dirname, 'sample.txt');
try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log("File content:", data);
} catch (err) {
    console.log("File not found for reading.");
}

// 7. Write a file
const writePath = path.join(__dirname, 'output.txt');
fs.writeFileSync(writePath, 'Hello, this is a new file!', 'utf8');
console.log("File written: output.txt");

// 8. Append data
fs.appendFileSync(writePath, '\nAppended line.', 'utf8');
console.log("Data appended to output.txt");

// 9. Delete a file (optional)
const deletePath = path.join(__dirname, 'deleteMe.txt');
fs.writeFileSync(deletePath, 'This file will be deleted.', 'utf8');
fs.unlinkSync(deletePath);
console.log("File deleted: deleteMe.txt");

// 10. Create a folder programmatically
const folderPath = path.join(__dirname, 'newFolder');
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log("Folder created: newFolder");
} else {
    console.log("Folder already exists: newFolder");
}