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
            data: null,
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
          .then(res => !!res.data && this.setState({data: res.data, error: res.data.error}))
    }

    handleCity = e => {
        this.setState({city: e.target.value})
    }

    render() {
        console.log(this.state);
        return <div className="container">
            <h1>Weather Viewer</h1>
            <form onSubmit={this.getWeather}>
               <input className="city-input" type="text" placeholder="Enter your city" onChange={this.handleCity}/>
            </form>
            {!this.state.error && this.state.data && this.state.data.map(entry => <p key={entry.date}>{entry.dateText}: {Math.floor(entry.temp)}, {conditions[entry.condition]} - {entry.description}</p>) || <p>{this.state.error}</p>}
          </div>;
    }
}

ReactDOM.render(
    <WeatherPage />,
    document.getElementById("root")
);
