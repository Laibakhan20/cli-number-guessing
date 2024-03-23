#! /usr/bin/env node

import inquirers from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

console.log("Welcome to the Number Guessing Game!");
console.log("I'm thinking of a number between 1 and 10.");
console.log("Can you guess it?");

const answers = await inquirers.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number (between 1 - 10) :"
    }
])

console.log(answers);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number. ");
} else {
    console.log("Oops! , you guessed the wrong number. Keep trying!");
}