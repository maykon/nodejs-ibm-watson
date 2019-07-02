require("dotenv").config();
const express = require("express");
const cors = require("cors");
var app = express();
const fetchNLUWatsonBot = require("./bot/nlu");
const fetchAssistentWatsonBot = require("./bot/assistent");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/messages", async (req, res, next) => {
  console.log(JSON.stringify(req.body, null, 2));
  let msg = req.body.message;
  const [watson, assistant] = await Promise.all([
    fetchNLUWatsonBot(msg),
    fetchAssistentWatsonBot(msg)
  ]);
  res.json({ watson, assistant });
});

app.listen(3000);
