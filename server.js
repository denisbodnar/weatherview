const express = require("express");
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/:city", (req, res) => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&units=metric&appID=a7985e3a1ae3c390540fde0efe3acd62`)
      .then(result => res.send(result.data))
      .catch(err => res.send("Error!"));
});

app.get("/", (req, res) => res.send("Hello!\u26A1"));

app.listen(3000, () =>
  console.log("\uD83D\uDE80" + "Server started on port 3000")
);