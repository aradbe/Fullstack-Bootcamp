// Exercise 1

let p1 = {
    name: "Robert",
    age: 30,
    city: "New York"
}

let p2 = {
    name: "Jill",
    age: 30,
    city: "Los Angeles"
}

if (p1.age === p2.age) {
    if (p1.city === p2.city) {
        console.log("Jill wanted to date robert");
    }
    else {
        console.log("Jill wanted to date robert but couldn't");
    }
}

// Exercise 2

let library = {
    books: [
        { title: "Book 1", author: "Author 1" },
        { title: "Book 2", author: "Author 2" },
        { title: "Book 3", author: "Author 3" },
        { title: "Book 4", author: "Author 4" },
        { title: "Book 5", author: "Author 5" }]
}

// Exercise 3
const reservations = {
    Bob: { claimed: false },
    ted : { claimed: true }
}

const name = 'teD'.toLowerCase();

// if (reservations[name] === undefined) {
//     console.log("You have no reservation");
// }  Outlined for EX 3.1

if (reservations[name] === undefined) {
    reservations[name] = { claimed: true };
    console.log("Reservation added for " + name);
}

else if (reservations[name].claimed === false) {
    console.log("Welcome, " + name);
}

else if (reservations[name].claimed === true) {
    console.log("Hmm, someone already claimed this reservation");
}


// Exercise 4

const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const hasOven = kitchen.hasOven;
const fridgeWorks = kitchen.fridge.works;
const daysExpired = date - kitchen.fridge.items[1].expiryDate;



if(hasOven && fridgeWorks){
    console.log(`${kitchen.owner}'s ${kitchen.fridge.items[1].name} expired ${daysExpired} days ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${kitchen.fridge.items[1].name} in.`);
}
else if(!hasOven && fridgeWorks){
    console.log(`${kitchen.owner}'s ${kitchen.fridge.items[1].name} expired ${daysExpired} days ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the ${kitchen.fridge.items[1].name} in.`);
}
else if(hasOven && !fridgeWorks){
    console.log(`${kitchen.owner}'s ${kitchen.fridge.items[1].name} expired ${daysExpired} days ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the ${kitchen.fridge.items[1].name} in. And she'll have to pay $${kitchen.fridge.price/2} to fix the fridge.`);
}
else if(!hasOven && !fridgeWorks){
    console.log(`${kitchen.owner}'s ${kitchen.fridge.items[1].name} expired ${daysExpired} days ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the ${kitchen.fridge.items[1].name} in. And she'll have to pay $${kitchen.fridge.price/2} to fix the fridge.`);
}