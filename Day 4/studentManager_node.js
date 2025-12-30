const fs = require('fs');
const path = require('path');

const studentsFile = path.join(__dirname, 'students.json');

// Load students from file
function loadStudents() {
    try {
        if (fs.existsSync(studentsFile)) {
            const data = fs.readFileSync(studentsFile, 'utf8');
            return JSON.parse(data);
        }
        return [];
    } catch (error) {
        console.error('Error loading students:', error);
        return [];
    }
}

// Save students to file
function saveStudents(students) {
    try {
        fs.writeFileSync(studentsFile, JSON.stringify(students, null, 2));
    } catch (error) {
        console.error('Error saving students:', error);
    }
}

// Add a new student
function addStudent(student) {
    const students = loadStudents();
    student.id = Date.now();
    students.push(student);
    saveStudents(students);
    return student;
}

// Delete a student by ID
function deleteStudent(id) {
    let students = loadStudents();
    students = students.filter(s => s.id !== id);
    saveStudents(students);
    return students;
}

// Update a student by ID
function updateStudent(id, updatedData) {
    let students = loadStudents();
    students = students.map(s => s.id === id ? { ...s, ...updatedData } : s);
    saveStudents(students);
    return students.find(s => s.id === id);
}

module.exports = { loadStudents, saveStudents, addStudent, deleteStudent, updateStudent };