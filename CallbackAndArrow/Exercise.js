//Exercise 1


const pushPull = function (func) {
    func()
}


const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"


//Exercise 2

const getTime = function (func) {
  let time = new Date()
  func(time)
}


const returnTime = function (time) {
  console.log('The current time is: ' + time)
}

getTime(returnTime)


//Exercise 3

const logData = function (data) {
  console.log(data)
}


const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(console.error, logData, "I like to party")


// Exercise 4

const sum = (num1,num2,num3) => num1 + num2 + num3;

console.log(sum(1, 2, 3));


// Exercise 5

const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase();

console.log(capitalize("bOb")); // returns Bob
console.log(capitalize("TAYLOR")); // returns Taylor
console.log(capitalize("feliSHIA")); // returns Felishia


// Exercise 6

const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}

const commentOnWeather = temp => `its ${determineWeather(temp)} today`

console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"