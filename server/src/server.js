const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3001;

app.use(morgan("dev"));

app.get("/test", (req, res) => {
  res.status(200).send({
    message: "API is working fine!",
  });
});
app.delete("/test", (req, res) => {
  res.status(200).send({
    message: "DELETE: API is working fine!",
  });
});
app.post("/test", (req, res) => {
  res.status(200).send({
    message: "POST: API is working fine!",
  });
});
app.put("/test", (req, res) => {
  res.status(200).send({
    message: "PUT: API is working fine!",
  });
});

app.listen(port, () => {
  console.log(`E commerce mern server is running on port ${port}`);
});
