const express = require("express");
const app = express();
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: String,
    isActive: Boolean,
  })
);

app.post("/", async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    role: req.body.role ? req.body.role : "user",
    isActive: req.body.isActive ? req.body.isActive : true,
  });
  await user.save();
  res.send(user);
});

module.exports.register = app;
module.exports.User = User;
