const express = require("express");
const path = require("path");
const app = express();

app.get("/", (_request, response) => {
  response.sendFile(path.join(__dirname + "/index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running successfully`);
});
