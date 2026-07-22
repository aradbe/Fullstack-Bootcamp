const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`req.method} ${req.url}`);

  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.end("Welcome to my server!");
    return;
  }
  if (req.method === "GET" && req.url === "/about") {
    res.statusCode = 200;
    res.end("This is the about page");
    return;
  }

  if (req.method === "GET" && req.url === "/contact") {
    res.statusCode = 200;
    res.end("Email: johndoe@gmail.com");
    return;
  }

  res.statusCode = 404;
  res.end("404 - Page not found");
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
