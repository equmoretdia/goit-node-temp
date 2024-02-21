const jwt = require("jsonwebtoken");
require("dotenv").config();

const { SECRET_KEY } = process.env;
// console.log(process.env);

const payload = {
  id: "65d5204bb7dbe6295bed97c0",
};

const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
  const { id } = jwt.verify(token, SECRET_KEY);
  console.log(id);
  const invalidToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmU0YTVhNjhiMjdjOTQ3ZTI4NDk1YiIsImlhdCI6MTY3NzYxMDczNSwiZXhwIjoxNjc3NjkzNTM1fQ.YELvZzq9k2ErXHMwufOFfJUtEi2jxl6W5wtG4tiKnxS";
  const result = jwt.verify(invalidToken, SECRET_KEY);
} catch (error) {
  console.log(error.message);
}
