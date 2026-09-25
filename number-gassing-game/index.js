#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
let attempts = 3;
console.log("🎮 Welcome to the Number Guessing Game!");
console.log("");
console.log("🤔 I have picked a secret number between 1 and 10.");
console.log("🎯 You have 3 chances to guess it. Good luck! 🍀");
console.log("");
while (attempts > 0) {
    const answer = await inquirer.prompt({
        name: "userNumber",
        message: "🔢 Guess a number between 1-10",
        type: "number",
    });
    if (answer.userNumber === randomNumber) {
        console.log("");
        console.log("🎉✨ Amazing! You guessed it right! The secret number was " + randomNumber + " 🏆");
        break;
    }
    attempts = attempts - 1;
    if (attempts > 0) {
        if (answer.userNumber > randomNumber) {
            console.log("❌ Wrong! The secret number is smaller. 📉");
        }
        else {
            console.log("❌ Wrong! The secret number is bigger. 📈");
        }
        console.log("");
        console.log("⏳ You have " + attempts + " attempts left. Try again! 💪");
        console.log("");
    }
}
if (attempts === 0) {
    console.log("");
    console.log("😢 Oops! You ran out of attempts. The secret number was " + randomNumber);
    console.log("🍀 Better luck next time!");
}
