import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class WeatherPage extends React.Component {
    constructor() {
        super();

        this.state = {
            temp: null,
            condition: null,
            city: null
        }
    }

    getWeather() {
        axios
            .get(`localhost:3000/${this.state.city}`)
            .then(res => this.setState({temp: res.main.temp, condition: res.weather[0].main}))
            .catch(err => console.log("Something went wrong"));
    }

    handleCity = e => {
        this.setState({city: e.target.value})
    }

    render() {
        return <div>
            <h1>Hello! &#128640;</h1>
            <input type="text" placeholder="Enter your city" onChange={this.handleCity}/>
            <h2>{this.state.city}</h2>
          </div>;
    }
}

ReactDOM.render(
    < WeatherPage />,
    document.getElementById("root")
);
