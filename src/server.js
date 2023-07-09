const express = require("express");
const app = express();
const port = 3001;

app.get("/test", (req, res) => {
  res.status(200).send({
    message: "API is working fine!",
  });
});

app.listen(port, () => {
  console.log(`E commerce mern server is running on port ${port}`);
});
