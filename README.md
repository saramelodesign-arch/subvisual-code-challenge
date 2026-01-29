### SimpleToken dApp – Subvisual Coding Challenge

This project was developed for the **Subvisual Apprenticeship Developer Coding Challenge**.

The goal was to understand the basics of a dApp by connecting a simple smart contract with a frontend interface.

---

### What this project does

* Implements a simple smart contract (`SimpleToken`) that:

  * Stores balances per address
  * Allows minting tokens
* Includes basic automated tests for the contract
* Provides a small frontend that represents the user interaction flow

---

### Main choices

* The smart contract and tests are fully implemented and real
* The frontend focuses on:

  * User flow
  * UI states
  * Clarity of interaction
* The mint action is **simulated in the UI** instead of triggering real wallet transactions

This keeps the project simpler and avoids unnecessary complexity for a local demo.

---

### Difficulties found

* Local blockchain + wallet setup (Anvil + MetaMask) introduced:

  * Network configuration issues
  * Security warnings
  * Confusing UX during transaction approval
* To keep the project understandable, I reduced the frontend scope and focused on the interaction flow

---

### Tech used

* Solidity
* Foundry
* React (Vite)
* CSS

---

### Project structure

```
contracts/
  src/SimpleToken.sol
  test/SimpleToken.t.sol

frontend/
  src/App.jsx
  src/App.css
```

---

### How to run the project

**Smart contracts**
bash
cd contracts
forge test


**Frontend**

bash
cd frontend
npm install
npm run dev


### Notes

This project reflects my current learning stage and focuses on understanding the basics of smart contracts, frontend interaction, and UX decisions in a dApp context.

