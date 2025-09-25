const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");
const User = require("./dataBase.js");

function serveFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end("Server Error");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      serveFile(res, path.join(__dirname, "public", "signup.html"), "text/html");
    } else if (req.url === "/login") {
      serveFile(res, path.join(__dirname, "public", "login.html"), "text/html");
    } else if (req.url === "/style.css") {
      serveFile(res, path.join(__dirname, "public", "style.css"), "text/css");
    } else {
      res.writeHead(404);
      res.end("Not Found");
    }
  }

  if (req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const formData = querystring.parse(body);
      const { username, password } = formData;

      if (req.url === "/signup") {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
          res.end("Username already exists!");
        } else {
          const newUser = new User({ username, password });
          await newUser.save();
          res.end("Signup successful. You can now login.");
        }
      }

      if (req.url === "/login") {
        const user = await User.findOne({ username, password });
        if (user) {
          res.end("Login successful, Welcome " + username);
        } else {
          res.end("Invalid username or password!");
        }
      }
    });
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});