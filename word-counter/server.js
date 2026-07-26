const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const wordCounter = {};

// Converts a word to lowercase and removes numbers/special characters
function cleanWord(word) {
  return word.toLowerCase().replace(/[^a-z]/g, "");
}

// Converts a sentence into an array of clean words
function getWordsFromSentence(sentence) {
  return sentence.toLowerCase().match(/[a-z]+/g) || [];
}

// Exercise 1 — Sanity route
app.get("/sanity", function (request, response) {
  response.send("Server is up and running");
});

// Exercise 2 — Get the count of one word
app.get("/word/:word", function (request, response) {
  const word = cleanWord(request.params.word);

  if (!word) {
    return response.status(400).send({
      error: "Please provide a valid word",
    });
  }

  response.send({
    count: wordCounter[word] || 0,
  });
});

// Exercise 3 — Add one word
app.post("/word", function (request, response) {
  if (!request.body.word || typeof request.body.word !== "string") {
    return response.status(400).send({
      error: "Please send a word as a string",
    });
  }

  const word = cleanWord(request.body.word);

  if (!word) {
    return response.status(400).send({
      error: "Please send a valid word",
    });
  }

  if (wordCounter[word] === undefined) {
    wordCounter[word] = 1;
  } else {
    wordCounter[word]++;
  }

  response.status(201).send({
    text: `Added ${word}`,
    currentCount: wordCounter[word],
  });
});

// Exercise 4 — Add every word in a sentence
app.post("/sentence", function (request, response) {
  if (!request.body.sentence || typeof request.body.sentence !== "string") {
    return response.status(400).send({
      error: "Please send a sentence as a string",
    });
  }

  const words = getWordsFromSentence(request.body.sentence);

  if (words.length === 0) {
    return response.status(400).send({
      error: "The sentence does not contain any valid words",
    });
  }

  let numNewWords = 0;
  let numOldWords = 0;

  for (const word of words) {
    if (wordCounter[word] === undefined) {
      wordCounter[word] = 1;
      numNewWords++;
    } else {
      wordCounter[word]++;
      numOldWords++;
    }
  }

  response.status(201).send({
    text: `Added ${numNewWords} words, ${numOldWords} already existed`,
    currentCount: -1,
  });
});

// Exercise 5 — Delete one word
app.delete("/word/:word", function (request, response) {
  const word = cleanWord(request.params.word);

  if (!word) {
    return response.status(400).send({
      error: "Please provide a valid word",
    });
  }

  if (wordCounter[word] === undefined) {
    return response.status(404).send({
      error: `The word "${word}" does not exist`,
    });
  }

  delete wordCounter[word];

  response.status(200).send({
    text: `Deleted ${word}`,
  });
});

// Extension 2 — Get the most popular word
app.get("/popular", function (request, response) {
  const words = Object.keys(wordCounter);

  if (words.length === 0) {
    return response.status(404).send({
      error: "No words have been added yet",
    });
  }

  let mostPopularWord = words[0];

  for (const word of words) {
    if (wordCounter[word] > wordCounter[mostPopularWord]) {
      mostPopularWord = word;
    }
  }

  response.send({
    text: mostPopularWord,
    count: wordCounter[mostPopularWord],
  });
});

// Extension 3 — Get the top five words
app.get("/ranking", function (request, response) {
  const sortedWords = Object.entries(wordCounter).sort(function (a, b) {
    if (b[1] === a[1]) {
      return a[0].localeCompare(b[0]);
    }

    return b[1] - a[1];
  });

  const topFive = sortedWords.slice(0, 5);

  const ranking = topFive.map(function ([word, count]) {
    return {
      [word]: count,
    };
  });

  response.send({
    ranking: ranking,
  });
});

// Extension 4 — Get the total count of all words
app.get("/total", function (request, response) {
  const totalCount = Object.values(wordCounter).reduce(function (sum, count) {
    return sum + count;
  }, 0);

  response.send({
    text: "Total count",
    count: totalCount,
  });
});

app.listen(PORT, function () {
  console.log(`Server running at http://localhost:${PORT}`);
});
