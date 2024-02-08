const express = require("express");
const cors = require("cors");

const booksRouter = require("./roots/api/books");

// const books = require("./data/books");

const app = express();

app.use(cors());

//transfered to ./roots/api/books.js:
/*
app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:id", (req, res) => {
  res.json(books[0]);
});

app.post("/api/books", (req, res) => {
  res.json(books[0]);
});

app.put("/api/books/:id", (req, res) => {
  res.json(books[0]);
});

app.delete("/api/books/:id", (req, res) => {
  res.json(books[0]);
});
*/

app.use("/api/books", booksRouter);

app.listen(3000, () => console.log("Server running"));
