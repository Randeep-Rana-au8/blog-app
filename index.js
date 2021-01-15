const express = require("express");
const app = express();
const port = process.env.PORT || 3400;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const posts = require("./routes/posts");
const { register, User } = require("./routes/users");
const login = require("./routes/login");
const session = require("express-session");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({ secret: "mysecretId", resave: true, saveUninitialized: true })
);

app.use("/posts", posts);
app.use("/register", register);
app.use("/login", login);

mongoose
  .connect("mongodb://localhost/myblogapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Connected to server..."))
  .catch((err) => console.log(err));

app.get("/health", (req, res) => {
  res.send("Health is ok");
});

app.get("/logout", (req, res) => {
  let data = req.session.user;
  if (req.session.user) {
    req.session.user = null;
    res.send(
      `Logout successful Mr. ${data.name}  Please Login to Use services`
    );
    return;
  }
  res.send("please login first");
});

app.get("/session", (req, res) => {
  res.send(req.session.user);
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`App is running on ${port}`);
});
