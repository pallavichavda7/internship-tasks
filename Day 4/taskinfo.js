const fs = require('fs');
const path = require('path');

/**
 * Day 4: Node.js Fundamentals - Task Information
 * This file documents all tasks to be completed
 */

const tasks = {
    task1: {
        title: "Install Node.js and Create a Workspace",
        description: "Set up project structure with folders and files",
        files: [
            "day4_intro.js",
            "data/students.json",
            "utils/mathUtil.js"
        ]
    },
    
    task2: {
        title: "Write and Run 10 Node Programs",
        programs: [
            "Print your name",
            "Add two numbers",
            "Print today's date",
            "Print the length of students array",
            "Loop over student objects",
            "Read a file",
            "Write a file",
            "Append data",
            "Delete a file",
            "Create a folder programmatically"
        ]
    },
    
    task3: {
        title: "Create fileManager.js",
        functions: [
            "readJSON(filePath)",
            "writeJSON(filePath, data)",
            "appendToFile(filePath, value)"
        ]
    },
    
    task4: {
        title: "Load Students from File and Process Them",
        file: "day4_processStudents.js",
        requirements: [
            "Print all student names",
            "Add a new student",
            "Save updated list back to file"
        ]
    },
    
    task5: {
        title: "Create a Backup File",
        description: "Auto-backup before making changes using fs.copyFileSync()"
    },
    
    task6: {
        title: "Build Node-Based Student Manager",
        file: "studentManager_node.js",
        functions: [
            "loadStudents()",
            "saveStudents()",
            "addStudent()",
            "deleteStudent()",
            "updateStudent()"
        ]
    }
};
// Function to initialize all required files and folders
function initializeProject() {
    
    const baseDir = __dirname;
    
    // Create data folder
    const dataDir = path.join(baseDir, 'data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }
    
    // Create utils folder
    const utilsDir = path.join(baseDir, 'utils');
    if (!fs.existsSync(utilsDir)) {
        fs.mkdirSync(utilsDir);
    }
    
    // Create students.json
    const studentsFile = path.join(dataDir, 'students.json');
    if (!fs.existsSync(studentsFile)) {
        const sampleData = [
            { id: 1, name: "Alice", grade: "A" },
            { id: 2, name: "Bob", grade: "B" }
        ];
        fs.writeFileSync(studentsFile, JSON.stringify(sampleData, null, 2));
    }
    
    console.log("Project initialized successfully!");
}

initializeProject();

module.exports = tasks;


// Task 1: Install Node.js and Create a Workspace 
// Create: 
// internship-project/ 
//    |– day4_intro.js 
//    |– data/ 
//    |     |– students.json 
//    |– utils/ 
//          |– mathUtil.js 
 
 
// ✔ Task 2: Write and Run 10 Node Programs 
// // Examples: 
// Print your name 
// Add two numbers 
// Print today’s date 
// Print the length of students array 
// Loop over student objects 
// Read a file 
// Write a file 
// Append data 
// Delete a file (optional) 
// Create a folder programmatically 
// These build your Node.js foundation. 
 
// ✔ Task 3: Create fileManager.js 
// Add functions: 
// function readJSON(filePath) {} 
// function writeJSON(filePath, data) {} 
// function appendToFile(filePath, value) {} 
 
 
// ✔ Task 4: Load Students from File and Process Them 
// Create file: day4_processStudents.js 
// Use both modules: 
// const file = require('./fileManager'); 
// let students = file.readJSON('./data/students.json'); 
 
// console.log("Total:", students.length); 
 
// Add logic to: 
// Print all student names 
// Add a new student 
// Save updated list back to the file 
 
// ✔ Task 5: Create a Backup File 
// Automatically create a backup before changes: 
// fs.copyFileSync('students.json', 'students_backup.json'); 
 
 
// ✔ Task 6: Build Node-Based Student Manager 
// Create: 
// studentManager_node.js 
// Include: 
// loadStudents() 
// saveStudents() 
// addStudent() 
// deleteStudent() 
// updateStudent() 
// This is a mini backend without Express. 
// ----------------------------------------------- 
// 📂 DAY 4 Deliverables 
// Submit: 
// day4_intro.js 
// mathUtil.js 
// fileManager.js 
// day4_processStudents.js 
// studentManager_node.js 
// Screenshot of file read/write operations 