# Asma Simple Calculator

A simple command-line calculator built with TypeScript and Inquirer.

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Repeat calculations until you choose to stop


## Usage

Run the calculator directly without installing, using npx:

```bash
npx asma-678-simple-calculator
```

Or after installation:


Then follow the prompts:

1. Enter your first number
2. Enter your second number
3. Select an operator (Addition, Subtraction, Multiplication, Division)
4. View your result
5. Choose whether to calculate again

## Example

```
Enter your first number: 10
Enter your Second number: 5
Select one of the operators to perform operation: Addition
Your answer is: 15 🎉
Do you want to calculate again? (y/N)
```

## Author
Made with 💛 by **Asma-Akbar**

---

# npm Publish Setup

### 🔐 Token Setup

Create your token here: https://www.npmjs.com/settings/asma_akbar/tokens

- Permission: `Read and write (publish and stage)`
- Package: All packages / required package
- Stage only: ❌ OFF
- Bypass 2FA: ✅ ON
- IP ranges: Blank

### 💻 Save Token

```cmd
npm config set //registry.npmjs.org/:_authToken=YOUR_TOKEN

npm publish
```