const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET" && req.url === "/") {
    res.end(JSON.stringify({ message: "Welcome to the Home page" }));
  }

  else if (req.method === "GET" && req.url === "/info") {
    res.end(JSON.stringify({ message: "This is the information page" }));
  }

  else if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const data = JSON.parse(body);
      res.end(JSON.stringify({
        message: "Data received successfully",
        data
      }));
    });
  }

  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
