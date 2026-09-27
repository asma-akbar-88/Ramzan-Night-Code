# ASMA CURRENCY CODE

```
╔════════════════════════════════════════════╗
║             ASMA CURRENCY CODE             ║
║       Simple CLI Currency Converter        ║
║          USD  EUR  GBP  INR  PKR           ║
╚════════════════════════════════════════════╝
```

A simple command line currency converter built with TypeScript and Inquirer.
Pick two currencies, type an amount, and the converted value is printed instantly.

---

## Features

- Interactive prompts, no arguments needed
- Five currencies supported
- All rates are measured against 1 USD
- Instant result, no browser required

---

## Supported currencies

| Code | Currency |
|------|----------|
| USD | US Dollar |
| EUR | Euro |
| GBP | British Pound |
| INR | Indian Rupee |
| PKR | Pakistani Rupee |

---

## Requirements

Node.js 20 or above. The program uses the built-in `fetch`, so nothing extra is needed.
---



## 🚀 Run Karne Ka Tarika

You can see and run my project on your CLI with this command:

```bash
npx asma-678-currency-convarter
```

## Example

```
?  enter from currency
❯ USD
  EUR
  GBP
  INR
  PKR

?  enter to currency
  USD
❯ PKR
  EUR
  GBP
  INR

?  enter from amount  100

30769.23
```

100 EUR to PKR gives 30769.23.

---

## How the conversion works

Every rate is stored against 1 USD, so the conversion is done in two steps:

**Step 1** — the amount is divided by the source rate to find its USD value.

```
100 / 0.91 = 109.89 USD
```

**Step 2** — that USD value is multiplied by the target rate to get the answer.

```
109.89 * 280 = 30769.23 PKR
```

Both steps are done by these two lines:

```ts
let usd_amount = amount / from_rate
let result = usd_amount * to_rate
```

---

## Project structure

| File | Purpose |
|------|---------|
| `index.ts` | Rates, prompts and the conversion |
| `package.json` | Project information and dependencies |
| `README.md` | This file |

---




## Author

Made with 💛 by **Asma-Akbar**

