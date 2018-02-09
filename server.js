const express = require("express");
const axios = require('axios');
const app = express();

let city = "Lviv"

app.get("/", (req, res) => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appID=a7985e3a1ae3c390540fde0efe3acd62`)
      .then(result => res.send(result.data))
      .catch(err => res.send(err.response.status));
});

app.get("/hello", (req, res) => res.send("Hello!\u26A1"));

app.listen(3000, () =>
  console.log("\uD83D\uDE80" + "Server started on port 3000")
);