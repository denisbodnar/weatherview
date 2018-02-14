import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import "./style.css";

const conditions = {
  Thunderstorm: "🌩️",
  Drizzle: "🌧️",
  Rain: "☔",
  Snow: "❄️",
  Atmosphere: "🌫️",
  Clear: "☀️",
  Clouds: "⛅",
  Extreme: "🌪️"
};

class WeatherPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            city: null,
            error: null,
            lat: null,
            long: null
        }
    }

    componentWillMount() {
        // navigator.geolocation.getCurrentPosition(pos =>
        //   this.setState({
        //     lat: Math.floor(pos.coords.latitude),
        //     long: Math.floor(pos.coords.longitude)
        //   })
        // );
    }

    getWeather = e => {
        e.preventDefault();
        axios
          .get(`http://127.0.0.1:3000/${this.state.city}`)
          .then(res => !!res.data && this.setState({data: res.data, error: res.data.error}))
    }

    handleCity = e => {
        this.setState({city: e.target.value})
    }

    render() {
        console.log(this.state);
        return <div className="container">
            <h1>Weather Viewer </h1>
            <form onSubmit={this.getWeather}>
              <input className="city-input" type="text" placeholder="City" onChange={this.handleCity} />
            </form>
            {(!this.state.error && this.state.data && this.state.data.map(
                entry => (
                  <div className="daily" key={entry.date}>
                    <div>
                      <p>{entry.dateText.split(" ")[0]}</p>
                    </div>
                    <div>
                      <p>{entry.dateText.split(" ")[1]}</p>
                    </div>
                    <div>
                      <h2>
                        {Math.floor(entry.temp)}{" "}
                        {conditions[entry.condition]}
                      </h2>
                    </div>
                    <div>
                      <p>{entry.description}</p>
                    </div>
                  </div>
                )
              )) || (this.state.error && <div className="daily">
                <p>{this.state.error.split(" ")[0]}</p>
                <h2>{this.state.error.split(" ")[1]}</h2>
                <p>{this.state.error.split(" ")[2]}</p>
              </div>)}
          </div>;
    }
}

ReactDOM.render(
    <WeatherPage />,
    document.getElementById("root")
);
