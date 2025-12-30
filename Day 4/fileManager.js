const fs = require('fs').promises;

// Reads and parses a JSON file
async function readJSON(filePath) {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
}

// Writes data as JSON to a file
async function writeJSON(filePath, data) {
    const json = JSON.stringify(data, null, 2);
    await fs.writeFile(filePath, json, 'utf8');
}

// Appends a value (string) to a file
async function appendToFile(filePath, value) {
    await fs.appendFile(filePath, value, 'utf8');
}

module.exports = { readJSON, writeJSON, appendToFile };