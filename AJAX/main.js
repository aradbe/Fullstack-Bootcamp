//Exercise 1

function fetch(isbn) {
  $.get(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
    function (result) {
      console.log(result);
    },
  );
}

// Test the function
fetch(9780575087057); // The Name of the Wind
fetch(9782806269171); // The Little Prince: Book Analysis
fetch(1440633908); // Of Mice and Men
fetch(9781945048470); // The Alchemist
fetch(9780307417138); // Hitchhiker's Guide to the Galaxy

//Exercise 2

function fetch2(queryType, queryValue) {
  $.get(
    `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    function (result) {
      console.log(result);
    },
  );
}

fetch2("isbn", 9789814561778)

//Exercise 3

function fetch3(queryType, queryValue) {
    $.get(
        `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        function(result) {

            result.items.forEach(function(book) {
                console.log("Title:", book.volumeInfo.title);
                console.log("Author:", book.volumeInfo.authors[0]);
                console.log(
                    "ISBN:",
                    book.volumeInfo.industryIdentifiers[0].identifier
                );
         
            });

        }
    );
}

fetch3("title", "How to Win Friends and Influence People");