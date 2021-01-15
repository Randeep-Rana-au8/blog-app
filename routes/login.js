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
  req.session.user = user;
  console.log(user);
  console.log("req.session in after login in login.js", req.session.user);
  res.send(req.session.user);
});

module.exports = app;
