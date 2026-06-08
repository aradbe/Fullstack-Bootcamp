const prompt = require("prompt-sync")()
const bank = require("./bank")

let choice

do {
    console.log("\n=== Banking System ===")
    console.log("1) Check Balance")
    console.log("2) Deposit Money")
    console.log("3) Withdraw Money")
    console.log("4) Exit")

    choice = prompt("Choose option (1-4): ")

    switch (choice) {
        case "1":
            bank.checkBalance()
            break

        case "2":
            let depositAmount = Number(prompt("Enter amount to deposit: "))

            if (depositAmount > 0) {
                bank.deposit(depositAmount)
            } else {
                console.log("Amount must be positive")
            }
            break

        case "3":
            let withdrawAmount = Number(prompt("Enter amount to withdraw: "))

            if (withdrawAmount > 0) {
                bank.withdraw(withdrawAmount)
            } else {
                console.log("Amount must be positive")
            }
            break

        case "4":
            console.log("Goodbye!")
            break

        default:
            console.log("Invalid choice")
    }

} while (choice !== "4")