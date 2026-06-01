//Exercise 1

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i=0; i<names.length; i++){
    people.push({name: names[i], age: ages[i]})
}
console.log(people);

// Exercise 2

for(let person of people){
    console.log(`${person.name} is ${person.age} years old`);
}

// Exercise 3

const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]

for(i=0; i<posts.length; i++){
    if(posts[i].id === 2){
        posts.splice(i,1);
        break;
    }
}
console.log(posts);

// Exercise 4

const posts2 = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]

for(let i=0; i<posts2.length; i++){
    if(posts2[i].id === 2){
        for(let j=0; j<posts2[i].comments.length; j++){
            if(posts2[i].comments[j].id === 3){
                posts2[i].comments.splice(j,1);
                break;
            }
        }
        break;
    }
}
console.log(posts2);

// Exercise 5

const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

for(let i in dictionary){
    console.log(`Words that begin with ${i}:`);
    for(let j=0; j<dictionary[i].length; j++){
        console.log(dictionary[i][j]);
    }
}