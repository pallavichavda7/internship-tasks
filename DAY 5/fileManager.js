const fs = require("fs");

/* Read JSON file */
function readJSON(path) {
  const data = fs.readFileSync(path, "utf-8");
  return JSON.parse(data);
}

/* Write JSON file */
function writeJSON(path, data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

/* Append text to file */
function appendText(path, text) {
  fs.appendFileSync(path, text + "\n");
}

module.exports = {
  readJSON,
  writeJSON,
  appendText
};