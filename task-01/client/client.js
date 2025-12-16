
const http = require("http");

// GET request
const getOptions = {
  hostname: "localhost",
  port: 3000,
  path: "/info",
  method: "GET"
};

const getReq = http.request(getOptions, res => {
  let data = "";

  res.on("data", chunk => data += chunk);
  res.on("end", () => console.log("GET response:", data));
});

getReq.end();

// POST request
const postData = JSON.stringify({
  name: "Solan",
  task: "Task-01 Client"
});

const postOptions = {
  hostname: "localhost",
  port: 3000,
  path: "/submit",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(postData)
  }
};

const postReq = http.request(postOptions, res => {
  let data = "";

  res.on("data", chunk => data += chunk);
  res.on("end", () => console.log("POST response:", data));
});

postReq.write(postData);
postReq.end();
