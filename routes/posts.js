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
  const posts = await Post.find();
  res.send(posts);
});

app.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    createdBy: req.session.user,
  });

  await post.save();
  res.send(post);
});

module.exports = app;
