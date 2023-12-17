const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const UserModel = require("./models/UserModel");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/users");

app.post("/register", async (req, res) => {
  // To post / insert data into database
  const { name, email, password } = req.body;

  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      res.json("Already registered");
    } else {
      UserModel.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    }
  });
});

app.post("/login", (req, res) => {
  // To find record from the database
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      // If user found then these 2 cases
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Wrong password");
      }
    }
    // If user not found then
    else {
      res.json("No records found! ");
    }
  });
});


app.listen(3000, () => {
  console.log("Server listining on http://127.0.0.1:3000");
});