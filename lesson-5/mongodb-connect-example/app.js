const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Sergey:Qwerty123SB999@cluster0.wqkgciu.mongodb.net/books_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect success"))
  .catch((error) => console.log(error.message));
