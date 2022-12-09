const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/home"));
app.use(express.static(__dirname + "/game"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home/index.html");
});

app.get("/game", (req, res) => {
    res.sendFile(__dirname + "/game/index.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
