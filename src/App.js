import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "ae2d920f576e75c5e4c20ca252b782f2";

class App extends Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    icon: "",
    error: ""
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const weatherInfo = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: weatherInfo.main.temp,
        city: weatherInfo.name,
        coutry: weatherInfo.sys.country,
        humidity: weatherInfo.main.humidity,
        description: weatherInfo.weather[0].description,
        icon: `http://openweathermap.org/img/w/${
          weatherInfo.weather[0].icon
        }.png`,
        error: ""
      });
    } else {
      this.setState({
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        icon: "",
        error:
          "Please enter the name of the city and the country (for example: Warsaw, PL)."
      });
    }
  };

  render() {
    const {
      temperature,
      city,
      country,
      humidity,
      description,
      icon,
      error
    } = this.state;
    return (
      <div className="app-container">
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={temperature}
          city={city}
          country={country}
          humidity={humidity}
          description={description}
          icon={icon}
          error={error}
        />
      </div>
    );
  }
}

export default App;
