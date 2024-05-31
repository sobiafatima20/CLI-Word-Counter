#! /usr/bin/env node
//Import the 'inquirer' module, which is a command line interface for node.js
import inquirer from 'inquirer';
import chalk from 'chalk';
//Declare a constant 'answer' and assign it to the result of inquirere.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.green("Enter your sentence to count the word: ")
    }
]);
const words = answers.Sentence.trim().split(" ");
//Print the array of words to the console
console.log(words);
//Print the word count of the sentence the the console
console.log(chalk.gray(`Your sentence word count is ${words.length}`));
