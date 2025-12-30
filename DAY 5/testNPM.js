const colors = require("colors");
const validator = require("validator");

console.log("NPM PACKAGES WORKING".green);

console.log("Valid Email:", validator.isEmail("test@gmail.com"));
console.log("Invalid Email:", validator.isEmail("abc@"));
