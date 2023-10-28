import express from "express";

const app = express();

function handleRequest(req, res) {
  res.sendFile(__dirname + "/index.html");
}

app.get("/", handleRequest);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
