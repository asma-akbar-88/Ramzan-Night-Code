#! /usr/bin/env node

import inquirer from "inquirer";

let condition = true;

while (condition) {
    const answer = await inquirer.prompt([{
        message: "Enter your first number", type: "number", name: "firstNumber"
    },
    { message: "Enter your Second number", type: "number", name: "SecondNumber" },
    {
        message: "Select one of the operators to perform operation", type: "select", name: "operator", choices: [
            "Additon", "Subtraction", "Multiplicaton", "Division"
        ],
    },
    ]);

    // condition statment

    if (answer.operator === "Additon") {
        console.log(`Your answer is: ${answer.firstNumber + answer.SecondNumber} 🎉`)
    }
    else if (answer.operator === "Subtraction") {
        console.log(`Your answer is: ${answer.firstNumber - answer.SecondNumber} 🎉`)
    }
    else if (answer.operator === "Multiplicaton") {
        console.log(`Your answer is: ${answer.firstNumber * answer.SecondNumber} 🎉`)
    }
    else if (answer.operator === "Division") {
        console.log(`Your answer is: ${answer.firstNumber / answer.SecondNumber} 🎉`)
    }
    else {
        console.log("Please select a valid operator 😞 Try again!")
    }

    const continueAnswer = await inquirer.prompt([{
        message: "Do you want to calculate again?", type: "confirm", name: "continue"
    }]);

    condition = continueAnswer.continue;
}

console.log("Thanks for using the calculator! Goodbye 👋")