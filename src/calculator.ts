// Imports
import input from "./input.js";

// Calculator
const first = parseFloat(await input("First number: "));
const second = parseFloat(await input("Second number: "));
const operator = (await input("Add / Sub / Mul / Div: ")).toLowerCase();

// Now using first, second, and operator
// Make a calculator in TypeScript

if (operator == "add") {
	console.log(first + second);
} else if (operator == "sub") {
	console.log(first - second);
} else if (operator == "mul") {
	console.log(first * second);
} else if (operator == "div") {
	console.log(first / second);
} else {
	console.log("Invalid operation!");
}
process.exit(0);
