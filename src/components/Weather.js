import React from "react";

const Weather = ({
  temperature,
  city,
  country,
  humidity,
  description,
  icon,
  error,
  getWeather
}) => {
  return (
    <div className="weather-info">
      {city && country && (
        <p>
          Location:
          {city}, {country}
        </p>
      )}
      {temperature && (
        <p>
          Temperature: <span>{temperature.toFixed(0)}&deg;C</span>
        </p>
      )}
      {humidity && (
        <p>
          Humidity: <span>{humidity}%</span>
        </p>
      )}
      {description && (
        <p>
          Conditions: <span>{description}</span>
        </p>
      )}
      {icon && <img src={icon} alt="information about weather" />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Weather;
