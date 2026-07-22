const http = require("http");

const PORT = 3000;

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

function sendJson(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  if (req.method === "GET" && pathname === "/api/users") {
    sendJson(res, 200, users);
    return;
  }

  const userRouteMatch = pathname.match(/^\/api\/users\/(\d+)$/);

  if (req.method === "GET" && userRouteMatch) {
    const id = Number(userRouteMatch[1]);
    const user = users.find((currentUser) => currentUser.id === id);

    if (!user) {
      sendJson(res, 404, { error: "User not found" });
      return;
    }

    sendJson(res, 200, user);
    return;
  }

  if (req.method === "POST" && pathname === "/api/users") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);

        if (!data.name || !data.email) {
          sendJson(res, 400, {
            error: "Name and email are required",
          });
          return;
        }

        const nextId =
          users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;

        const newUser = {
          id: nextId,
          name: data.name,
          email: data.email,
        };

        users.push(newUser);

        sendJson(res, 201, newUser);
      } catch (error) {
        sendJson(res, 400, {
          error: "Invalid JSON",
        });
      }
    });

    return;
  }

  sendJson(res, 404, {
    error: "Route not found",
  });
});

server.listen(PORT, () => {
  console.log(`API server is running at http://localhost:${PORT}`);
});
