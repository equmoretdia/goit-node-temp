const express = require("express");

const books = require("../../models/books");

const HttpError = require("../../helpers");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allBooks = await books.getAll();
    res.json(allBooks);
  } catch (error) {
    // res.status(500).json({ message: "Server error" });
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const oneBook = await books.getById(id);
    if (!oneBook) {
      throw HttpError(404, "Not found");
      //   const error = new Error("Not found");
      //   error.status = 404;
      //   throw error;
      //   ***
      //   return res.status(404).json({ message: "Not found" });
    }
    res.json(oneBook);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
