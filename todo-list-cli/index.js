#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let condition = true;
while (condition) {
    const answer = await inquirer.prompt([
        {
            name: "action",
            type: "select",
            choices: ["Add Task", "Delete Task", "View Task", "Exit"],
            message: "What do you want to do?"
        },
        {
            name: "task",
            type: "input",
            message: "Enter the task you want to add",
            when: (answers) => answers.action === "Add Task"
        },
        {
            name: "taskToDelete",
            type: "select",
            choices: todoList,
            message: "Select the task you want to delete",
            when: (answers) => answers.action === "Delete Task" && todoList.length > 0
        },
        {
            name: "addMore",
            type: "confirm",
            default: true,
            message: " \n Do you want to do more?"
        },
    ]);
    if (answer.action === "Add Task") {
        todoList.push(answer.task);
        console.log(` \n \n"${answer.task}" added successfully . \n`);
    }
    else if (answer.action === "Delete Task") {
        if (todoList.length === 0) {
            console.log("\n \n Your list is empty, nothing to delete. \n");
        }
        else {
            const index = todoList.indexOf(answer.taskToDelete);
            todoList.splice(index, 1);
            console.log(`\n"${answer.taskToDelete}" deleted successfully. \n `);
        }
    }
    else if (answer.action === "View Task") {
        if (todoList.length === 0) {
            console.log("\n Your list is empty.\n ");
        }
        else {
            console.log(" \n Your tasks: \n");
            console.log(todoList);
        }
    }
    else if (answer.action === "Exit") {
        console.log("Goodbye!");
        break;
    }
    condition = answer.addMore;
}
