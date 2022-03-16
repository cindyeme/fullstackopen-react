import React, { useState, useEffect } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const Weather = (props) => {
  const [weather, setWeather] = useState([]);
  console.log(weather);
  console.log(weather.weather);
  const { city, country } = props;

  // API response from openweathermap
  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
      )
      .then((res) => setWeather(res.data))
      .catch((error) => console.log("Error in weather >>>>", error));
  }, [city]);

  return (
    <div>
      <h2>Weather in {country?.capital} </h2>
      <p>Temperature: {weather?.main?.temp}</p>
      
      <p>Humidity: {`${weather?.main?.humidity}%`}</p>
      {weather.weather !== undefined ? (
        <>
          {weather.weather.map((key, idx) => (
            <div key={idx}>
              <p>
                {`${key?.id}: `}
                {key?.main} - {key?.description}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${key.icon}@2x.png`}
                alt="icon"
              />
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
      <p>Wind: {`${weather?.wind?.speed}m/s`}</p>
    </div>
  );
};

export default Weather;
