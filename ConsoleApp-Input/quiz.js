const prompt = require("prompt-sync")()

let questions = [
    { question: "What is 2 + 2? ", answer: "4" },
    { question: "What is the capital of France? ", answer: "paris" },
    { question: "What year is it? ", answer: "2026" }
]

let score = 0

for (let q of questions) {
    let userAnswer = prompt(q.question)

    if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
        score++
    }
}

console.log(`Final Score: ${score}/${questions.length} correct!`)