let balance = 100

function checkBalance() {
    console.log(`Balance: $${balance}`)
}

function deposit(amount) {
    balance += amount
    console.log(`New balance: $${balance}`)
}

function withdraw(amount) {
    if (amount > balance) {
        console.log("Insufficient funds")
        return
    }

    balance -= amount
    console.log(`New balance: $${balance}`)
}

module.exports = {
    checkBalance,
    deposit,
    withdraw
}