//1 readFile:

// const fs = require("fs");

// fs.readFile("./files/file.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// });

//2 readFile:
// const fs = require("fs/promises");

// fs.readFile("./files/file.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

//3 readFile:

// const fs = require("fs/promises");
//or
// const fs = require("fs").promises;

// const readFile = async () => {
//   const text = await fs.readFile("./files/file.txt", "utf-8");
//   console.log(text);
//or
// const buffer = await fs.readFile("./files/file.txt");
// const text = buffer.toString();
// console.log(text)
// };

// readFile();

//appendFile:

// const fs = require("fs/promises");

// const addText = async () => {
//   await fs.appendFile("./files/file2.txt", "\nТак говорил Заратустра");
// };

// addText();

//writeFile:

// const fs = require("fs/promises");

// const replaceText = async () => {
//   const result = await fs.writeFile("./files/file3.txt", "Ницше");
//   console.log(result);
// };

// replaceText();
