#! /usr/bin/env node 


import inquirer from "inquirer";

const answer = await inquirer.prompt([{
    name: "ans",
    type: "input",
    message: "Enter a sentence to count words:",
}]);

const finalAnswer = answer.ans.trim().split(" ");

console.log(`Total words: ${finalAnswer.length}`);
