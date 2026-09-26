#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 10000;
let pin = 1122;
const condtion = true;
while (condtion) {
    const pinAnswer = await inquirer.prompt({
        name: "userPin",
        message: "Please enter your 4 digit pin:",
        type: "number",
    });
    if (pinAnswer.userPin !== pin) {
        console.log("You entered a wrong pin.");
    }
    else {
        const actionAnswer = await inquirer.prompt({
            name: "action",
            message: "Please select an option below:",
            type: "select",
            choices: ["Fast Cash", "Withdraw", "Check Balance", "Exit"],
        });
        if (actionAnswer.action === "Fast Cash") {
            const fastCashAnswer = await inquirer.prompt({
                name: "amount",
                message: "Select an amount:",
                type: "select",
                choices: ["500", "1000", "2000", "5000"],
            });
            if (Number(fastCashAnswer.amount) > balance) {
                console.log("Insufficient balance.");
            }
            else {
                balance -= Number(fastCashAnswer.amount);
                console.log("Withdrawal successful.");
                console.log(`Amount withdrawn: ${fastCashAnswer.amount}`);
                console.log(`Your new balance is: ${balance}`);
            }
        }
        else if (actionAnswer.action === "Withdraw") {
            const amountAnswer = await inquirer.prompt({
                name: "amount",
                message: "Enter the amount you want to withdraw:",
                type: "number",
            });
            if (amountAnswer.amount > balance) {
                console.log("Insufficient balance.");
            }
            else {
                balance -= amountAnswer.amount;
                console.log("Withdrawal successful.");
                console.log(`Amount withdrawn: ${amountAnswer.amount}`);
                console.log(`Your new balance is: ${balance}`);
            }
        }
        else if (actionAnswer.action === "Check Balance") {
            console.log(`Your current balance is: ${balance}`);
        }
        else if (actionAnswer.action === "Exit") {
            console.log("Thank you for using our ATM. Goodbye!");
            break;
        }
    }
}
