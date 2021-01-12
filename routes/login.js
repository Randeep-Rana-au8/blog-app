const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { User } = require("../routes/users");

app.post("/", async (req, res) => {
  //   const user = {
  //     email: req.body.email,
  //     password: req.body.password,
  //   };

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");
  const validPass = user.password == req.body.password;
  if (!validPass) return res.status(400).send("Invalid email or password");

  res.send("Login Successfull");
});

module.exports = app;
