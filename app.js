const express = require("express");

const app = express();

const path = require("path");

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/contactmebro", (request, response, next) => {
  response.sendFile(__dirname + "/views/contacts/html");
});
app.get("/aboutme", (request, response, next) => {
  response.sendFile(__dirname + "/views/aboutme.html");
});
app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.listen(3000, () => {
  console.log("server is running on 3000");
});
