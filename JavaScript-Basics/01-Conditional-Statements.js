
    // Exercise 1
let age = 20
if(age >= 18) {
    console.log("You can vote !")
}

    // Exercise 2
    let score = 85;
    if(score>=90){
        console.log("Grade: A");
    } 
    else if(score>=80){
        console.log("Grade: B");
    } 
    else if (score>=70){
        console.log("Grade: C");
    } 
    else if (score>=60){
        console.log("Grade: D");
    } 
    else {
        console.log("Grade: F");
    }

    // Exercise 3
    let temperature = 20;
    let weather = "sunny";

    if(weather === "sunny" ){
        if(temperature>24){
            console.log("Go to the beach");
        }
        else if(temperature>15){
            console.log("Go for a walk");
        }
        else if(temperature<15){
            console.log("Stay inside and read");
        }
    }
    if(weather === "cloudy"){
        if(temperature>21){
            console.log("Go hiking");
        }
        else if(temperature<=21){
            console.log("Visit a museum");
        }
    }
    if(weather === "rainy"){
        console.log("Watch a movie indoors");
    }

    // Exercise 4
    let usernameLength = 6;
    let passwordLength = 7;
    let userAge = 13;

    if(usernameLength >=5 && passwordLength >=8 && userAge>=13){
        console.log("Registration successful");
    }
    else if(usernameLength <5){
        console.log("Username must be at least 5 characters long");
    }
    else if(passwordLength <8){
        console.log("Password must be at least 8 characters long");
    }
    else if(userAge <13){
        console.log("You must be at least 13 years old to register");
    }

    // Exercise 5
    let customerType = "VIP";
    let purchaseAmount =150;
    let dayOfWeek = 6;

    if(customerType === "VIP"){
        purchaseAmount *= 0.8; 
    }
    else if(customerType === "premium"){
        if(dayOfWeek >=5){
            purchaseAmount *= 0.85;
        }
        else{
            purchaseAmount *= 0.90;
        }
    }
    else{
        if(purchaseAmount >100){
            purchaseAmount *= 0.90;
        }
        else if(purchaseAmount >50){
            purchaseAmount *= 0.95;
        }
    }
    console.log("Final price: $" + purchaseAmount);

    // Exercise 6
    let year = 2024;
    if((year % 4==0) && (year % 100 !== 0) || (year % 400 === 0)){
        console.log(year + " is a leap year");
    }
    else{
        console.log(year + " is not a leap year");
    }
    
    