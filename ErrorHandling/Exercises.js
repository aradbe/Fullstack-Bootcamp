//Exercise 1

function safeJsonParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return "Invalid JSON format";
  }
}

console.log(safeJsonParse('{"name": "John"}'));
// Output: { name: 'John' }

console.log(safeJsonParse("invalid json"));
// Output: Invalid JSON format

//Exercise 2

const fs = require("fs");

function readFileWithErrorHandling(filePath, callback) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      if (error.code === "ENOENT") {
        callback(`File not found: ${filePath}`);
      } else if (error.code === "EISDIR") {
        callback(`Path is a directory, not a file: ${filePath}`);
      } else {
        callback(`Error reading file: ${error.message}`);
      }
      return;
    }

    callback(`File read successfully. Size: ${data.length} bytes`);
  });
}

readFileWithErrorHandling('missing.txt', (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});

readFileWithErrorHandling('testfile.txt', (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});