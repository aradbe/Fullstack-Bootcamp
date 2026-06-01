const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]

const capitalize = function(str) {
  let capitalizedStr = ""
  capitalizedStr += str[0].toUpperCase()      // first letter, capitalized
  capitalizedStr += str.slice(1)              // rest of the string
  return capitalizedStr
}

// Exercise 1

const getAge = function(age) {
    if (age < 21) {
        return "an underage";
    }
    else if (age < 55) {
        return `${age} year-old`;
    }
    else {
        return "a 55+";
    }
}

const capitalizeProfession = function(profession) {
    let words = profession.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = capitalize(words[i]);
    }

    return words.join(" ");
}

const getLocation = function(city, country) {
    return `from ${capitalize(city)}, ${capitalize(country)}`;
}

const capitalizeCatchphrase = function(phrase) {
    return `"${capitalize(phrase)}"`;
}

const getSummary = function(person) {
    let summary = "";

    summary += capitalize(person.name);
    summary += ` is ${getAge(person.age)} `;
    summary += capitalizeProfession(person.profession) + " ";
    summary += getLocation(person.city, person.country) + ". ";
    summary += `${capitalize(person.name)} loves to say ${capitalizeCatchphrase(person.catchphrase)}`;

    return summary;
}

for (let person of people_info) {
    console.log(getSummary(person));
}

// Exercise 2

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}

const cleanText = function(sentence) {
    sentence = sentence.toLowerCase()
    for (let i = 0; i < specialChars.length; i++) {
        sentence = sentence.split(specialChars[i]).join(" ")
    }
    return sentence.split(" ")
}

const addToCounter = function(word) {
        if (wordCounts[word] === undefined) {
            wordCounts[word] = 1
        } else {
            wordCounts[word]++
        }
}

const countWords = function(sentence) {
    let words = cleanText(sentence)

    for (let i = 0; i < words.length; i++) {
        addToCounter(words[i])
    }
}

countWords(story)
console.log(wordCounts)