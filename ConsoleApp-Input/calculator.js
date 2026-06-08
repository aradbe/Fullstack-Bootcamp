const num1 = Number(process.argv[2])
const operation = process.argv[3]
const num2 = Number(process.argv[4])

let result

if (operation === "+") {
     result = num1 + num2
} else if (operation === "-") {
    result = num1 - num2
} else if (operation === "*") {
    result = num1 * num2
} else if (operation === "/") {
    result = num1 / num2
} else {
    console.log("Invalid operation")
    process.exit()
}

console.log(`${num1} ${operation} ${num2} = ${result}`)