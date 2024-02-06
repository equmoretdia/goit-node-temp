const { program } = require("commander");

const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      return console.log(allBooks);
    case "getById":
      const oneBook = await books.getById(id);
      return console.log(oneBook);
    case "add":
      const newBook = await books.add({ title, author });
      return console.log(newBook);
    case "updateById":
      const updateBook = await books.updateById(id, { title, author });
      return console.log(updateBook);
    case "deleteById":
      const deleteBook = await books.deleteById(id);
      return console.log(deleteBook);
    default:
      return console.log("unknown action");
  }
};

// program
//   .option("--action, <type>")
//   .option("--id, <type>")
//   .option("--title, <type>")
//   .option("--author, <type>");

//we can use shortened commands variants:
program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-t, --title, <type>")
  .option("-at, --author, <type>");

program.parse();

const options = program.opts();
// console.log(options);
invokeAction(options);

//console commands examples:
//$ node app --action read
//$ node app --action getById --id 9uu0D-Mgs_f4A4I2NhRdb
//$ node app --action add --title "Good book" --author "Jhon Right"
//$ node app --action updateById --id jUQ3GVJm0QfAMge5tLL7A --title "Bad book" --author "Jhon Wrong"
//$ node app --action deleteById --id jUQ3GVJm0QfAMge5tLL7A
