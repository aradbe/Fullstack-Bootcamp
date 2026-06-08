//Exercise 1

let meatArr = ["beef", "chicken"]
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"]

meatArr = [...meatArr, vegetableArr[0]]
vegetableArr = [...vegetableArr.slice(1)]

console.log(meatArr)      
console.log(vegetableArr) 


//Exercise 2

var firstPiece = { id: 101, name: 'Ofri' }

var secondPiece = { country: 'Israel'}

var fullPassport = {...firstPiece,...secondPiece};

console.log(fullPassport)