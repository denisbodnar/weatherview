import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import "./style.css";

const API = 'http://127.0.0.1:3000/';

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

const WeatherCard = props => {
  return (
    <div className="daily">
      <p>{props.header}</p>
      <h2>{props.main}</h2>
      <p>{props.description}</p>
    </div>
  );
}

class WeatherPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      city: null,
      error: false,
    }
  }

  getWeather = e => {
      e.preventDefault();
      axios
        .get(`${API}${this.state.city}`)
        .then(res => !!res && this.setState({ data: res.data, error: res.data.error }))
        .catch(err => this.setState({ error: true }));
  }

  handleCity = e => {
      this.setState({city: e.target.value})
  }

  render() {
    return (    
      <div className="container">
        <h1>Weather</h1>
        <form onSubmit={this.getWeather}>
          <input className="city-input" type="text" placeholder="City" onChange={this.handleCity} />
        </form>
        {
          this.state.error && <WeatherCard header="Oops!" main=" 🤷 " description="Something wrong" /> || 
          this.state.data && this.state.data.map(
              entry => (
                <WeatherCard 
                  key={entry.date} 
                  header={entry.dateText} 
                  main={`${Math.floor(entry.temp)}  ${conditions[entry.condition]}`}
                  description={entry.description}
                />
              )
            )}
      </div>
    );
  }
}

ReactDOM.render(
  <WeatherPage />,
  document.getElementById("root")
);
