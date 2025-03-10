/*
03/09/25
Practice: Values, Data Types, and Operations - 4 - readline-sync
----------------------------------
Instructions
Create a command-line quiz application that tests students on knowledge from the Values, Data Types, and Operations module. Your application should: 
1. Use the readline-sync node module to ask users questions and collect their responses. 
2. Prompt the user for their name and greet them. 
3. Use readline-sync.question() to ask the user 5 questions that test their knowledge of Values, Data Types, and Operations. 
○ At least one of your questions should prompt the user for a number. 
4. Store the user’s answers in variables. 
5. Print the value of those answers back to the user
*/

const readline = require("readline-sync");
// let valueName = readline.question("Question text… ");

// prompt user for name and greeting
let names = readline.question("What is your name? ");
console.log("Hello " + names + "! Pleased to have you taking this quiz.");
console.log("Select an answer for the following 5 prompts: ");

// Question 1
const answer1 = readline.question("1. What would the data type uses values 'true' and 'false'? ");
console.log("Your response was ${answer1}"); // correct = boolean

// Question 2
const answer2 = readline.questionInt("2. A line of code reads 'console.log('6' + 3)'. What is the output? (Enter a number) ");
console.log("Your response was " + answer2); // correct = concatenation 63

// Question 3
const answer3 = readline.question("3. Explicit or Implicit?: Type Casting - Programmer intentionally converts a value from one data type to another. ");
console.log("Your response was " + answer3); // correct = explicit

// Question 4
const answer4 = readline.question("4. What is it called when a named variable starts with a lowercase letter, but each following word within the name begins with a capital letter? ");
console.log("Your response was " + answer4); // correct = camel case, camelCase

// Question 5
const answer5 = readline.question("5. What keyword declares a variable that cannot be reassigned? ");
console.log("Your response was " + answer5); // correct = const

// Print stored answers back
console.log("--- Answer Receipt ---")
console.log("Question 1: " + answer1);
console.log("Question 2: " + answer2);
console.log("Question 3: " + answer3);
console.log("Question 4: " + answer4);
console.log("Question 5: " + answer5);
