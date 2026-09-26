# ATM Project CLI

A simple ATM machine simulator that runs in the terminal using TypeScript and Inquirer.

## Features

- PIN verification (default PIN: `1122`)
- Withdraw cash
- Fast Cash (500, 1000, 2000, 5000)
- Check balance
- Exit the program
- Runs in a loop until you choose Exit

## Run with npx (anywhere on your laptop)

```bash
npx asma-678-atm-project-cli
```

## How to use

1. Enter your 4 digit PIN. The default PIN is `1122`.
2. Choose an option from the menu:
   - `1` Fast Cash
   - `2` Withdraw
   - `3` Check Balance
   - `4` Exit
3. Follow the prompts to complete your transaction.

## Project Structure

```
atm-project-cli/
├── index.ts          # Main source code
├── index.js          # Compiled JavaScript output
├── package.json      # Project config
└── tsconfig.json     # TypeScript config
```



Made 💛 by **Asma-Akbar**