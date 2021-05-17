const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./src/db/models");

app.post("/", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const user = await db.User.create({
    firstName: firstName,
    lastName: lastName,
    email: email
  });
  res.json(user)
});

app.get("/", async (req, res)=> {
    const users = await db.User.findAll()
    res.json(users)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
