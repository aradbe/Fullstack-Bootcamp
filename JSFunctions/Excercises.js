//Exercise 1

const IsEven = function(num){
    if(num%2 === 0){
        return true;
    }
    return false;
}
console.log(IsEven(4));
console.log(IsEven(7));

// Exercise 2

const ArrayIsEven = function(arr){
    for(let i=0; i<arr.length; i++){
        if(IsEven(arr[i])==false){
            console.log(arr[i]);
        }
    }
}
ArrayIsEven([1,2,3,4,5,6,7,8,9,10]);

// Exercise 3

const CheckExists = function(arr, num){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === num){
            return true;
        }
    }
    return false;
}
console.log(CheckExists([1,2,3,4,5], 3));
console.log(CheckExists([1,2,3,4,5], 6));

// Exercise 4

const calculator= {
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b;
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

// Exercise 5

const increaseByNameLength = function(money, name){
    return money*name.length;
}
const makeRegal = function(name){
    return "His Royal Highness, " + name;
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

// Exercise 6

const printArmstrongNumber = function(){
    for(let i=100; i<=999; i++){
        let firstDigit = Math.floor(i/100);
        let secondDigit = Math.floor((i%100)/10);
        let thirdDigit = i%10;
        if(firstDigit**3 + secondDigit**3 + thirdDigit**3 === i){
            console.log(i);
        }
    }
}

printArmstrongNumber() 