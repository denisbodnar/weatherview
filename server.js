const express = require("express");
const axios = require('axios');
const cors = require('cors');
const app = express();
const API = "http://api.openweathermap.org/data/2.5/forecast";
const token = "a7985e3a1ae3c390540fde0efe3acd62";
const units = "metric"

app.use(cors());

app.get("/:city", (req, res) => {
    axios
      .get(`${API}?q=${req.params.city}&units=${units}&appID=${token}`)
      .then(result => res.send({
        days: result.data.list.map(entry => {
          return { 
            date: entry.dt, 
            temp: entry.main.temp, 
            condition: entry.weather[0].main, 
            description: entry.weather[0].description, 
            dateText: entry.dt_txt };
          }), 
          error: false
        })
      )
      .catch(err => res.send({ days: null, error: true }));
  }
);

app.listen(3000, () => console.log("Server started on port 3000"));