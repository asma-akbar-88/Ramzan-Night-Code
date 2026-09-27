# Todo List CLI

A simple todo list that runs in the terminal using TypeScript and Inquirer.

## Features

- Add a task
- Delete a task (pick it from the list)
- View all tasks
- Exit the program
- Runs in a loop until you choose Exit

## Run with npx

You can see and run my project on your CLI with this command:

```bash
npx asma-678-todo-list-cli
```

## How to run locally

```bash
npm install
npx tsc index.ts
node index.js
```

## How to use

1. Choose an option from the menu: `Add Task`, `Delete Task`, `View Task`, or `Exit`.
2. **Add Task** — type your task and press Enter.
3. **Delete Task** — your tasks are shown in a dropdown, pick the one to remove.
4. **View Task** — prints your current list.
5. Answer `yes` or `no` when asked if you want to do more.

## Project Structure

```
todo-list-cli/
├── index.ts          # Main source code
├── index.js          # Compiled JavaScript output
├── package.json      # Project config
└── tsconfig.json     # TypeScript config
```

Made 💛 by **Asma-Akbar**
