const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Post = mongoose.model(
  "Post",
  new mongoose.Schema({
    title: String,
    description: String,
    createdBy: String,
  })
);

app.get("/", async (req, res) => {
  if (!req.session.user) {
    return res.send("login first");
  }
  const posts = await Post.find({});
  res.send(posts);
});

app.post("/", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(400).send("login first");
    }
    const post = new Post({
      title: req.body.title,
      description: req.body.description,
      createdBy: req.session.user.name,
    });

    await post.save();
    res.send(post);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = app;
