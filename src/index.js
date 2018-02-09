import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class WeatherPage extends React.Component {
    constructor() {
        super();

        this.state = {
            temp: null,
            condition: null,
            city: null,
            error: null
        }
    }

    getWeather = () => {
        return axios
          .get(`http://127.0.0.1:3000/${this.state.city}`)
          .then(res => !!res.data && this.setState({temp: res.data.main.temp, condition: res.data.weather[0].main}))
          .catch(err => this.setState({error: "City is not valid"}));
    }

    handleCity = e => {
        this.setState({city: e.target.value})
    }

    render() {
        return <div>
            <h1>Hello!</h1>
            <input type="text" placeholder="Enter anything" onChange={this.handleCity} />
            <button onClick={this.getWeather}>Show me weather!</button>
            {this.state.temp && <h2>Its {this.state.condition} and temperature is {this.state.temp}</h2> || <h2>{this.state.error}</h2>}
          </div>;
    }
}

ReactDOM.render(
    < WeatherPage />,
    document.getElementById("root")
);
