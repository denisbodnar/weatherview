import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import "./style.css";

const conditions = {
    "Thunderstorm": "⚡",
    "Drizzle": "💧",
    "Rain": "☔",
    "Snow": "⛄",
    "Atmosphere": "🌫",
    "Clear": "🌞",
    "Clouds": "⛅",
    "Extreme": "🌪"
};

class WeatherPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: null,
            condition: null,
            city: null,
            error: null,
            lat: null,
            long: null
        }
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(pos =>
          this.setState({
            lat: Math.floor(pos.coords.latitude),
            long: Math.floor(pos.coords.longitude)
          })
        );
    }

    getWeather = e => {
        e.preventDefault();
        axios
          .get(`http://127.0.0.1:3000/${this.state.city}`)
          .then(res => !!res.data && this.setState({
                temp: res.data.main.temp,
                condition: res.data.weather[0].main,
                error: null
              }))
          .catch(err => this.setState({ error: "Ooops 🤷" }));
    }

    handleCity = e => {
        this.setState({city: e.target.value})
    }

    render() {
        console.log(this.state);
        this.state.lat && axios
          .get(`http://127.0.0.1:3000/${this.state.lat}/${this.state.long}`)
          .then(res => !!res.data && this.setState({
                temp: res.data.main.temp,
                condition: res.data.weather[0].main,
                error: null
              }))
          .catch(err => this.setState({ error: "Ooops 🤷" }));
        return <div className="container">
            <h1>Weather</h1>
            <form onSubmit={this.getWeather}>
               <input className="city-input" type="text" placeholder="Enter your city" onChange={this.handleCity}/>
            </form>
            {(!this.state.error && this.state.condition && <h2> Its {conditions[this.state.condition]} and {Math.floor(this.state.temp)}</h2>) || <h2>{this.state.error}</h2>}
          </div>;
    }
}

ReactDOM.render(
    < WeatherPage />,
    document.getElementById("root")
);
