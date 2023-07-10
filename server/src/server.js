const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3001;

// middleware
app.use(morgan("dev"));

const isLoggedIn = (req, res, next) => {
  const isLogin = false;
  if (isLogin) {
    next();
  } else {
    return res.status(401).send({ message: "please login first" });
  }
};

app.get("/test", (req, res) => {
  res.status(200).send({
    message: "API is working fine!",
  });
});
app.get("/api/user", isLoggedIn, (req, res) => {
  res.status(200).send({
    message: "user profile is returned",
  });
});

app.listen(port, () => {
  console.log(`E commerce mern server is running on port ${port}`);
});
