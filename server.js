const express = require("express");
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/:city", (req, res) => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/forecast?q=${req.params.city}&units=metric&appID=a7985e3a1ae3c390540fde0efe3acd62`)
      .then(result => res.json(result.data.list.map(entry => {
            return { date: entry.dt, temp: entry.main.temp, condition: entry.weather[0].main, description: entry.weather[0].description, dateText: entry.dt_txt };
          })))
      .catch(err => res.json({ error: "Oops! 🤷 Nothing found!" }));
});

app.get("/:lat/:lon", (req, res) => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?lat=${req.params.lat}&lon=${req.params.lon}&units=metric&appID=a7985e3a1ae3c390540fde0efe3acd62`)
      .then(result => res.send(result.data))
      .catch(err => res.json({error: "Error!"}));
});

app.listen(3000, () =>
  console.log("Server started on port 3000")
);