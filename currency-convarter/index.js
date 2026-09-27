#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.79,
    INR: 74.57,
    PKR: 280
};
let user_amount = await inquirer.prompt([
    {
        name: "from",
        message: " enter from currency",
        type: "select",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        default: "USD"
    },
    {
        name: "to",
        message: " enter to currency",
        type: "select",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        default: "USD"
    },
    {
        name: "amount",
        message: " enter from amount",
        type: "number",
    },
]);
let from_rate = currency[user_amount.from];
let to_rate = currency[user_amount.to];
let amount = user_amount.amount;
let usd_amount = amount / from_rate;
let result = usd_amount * to_rate;
console.log(result);
