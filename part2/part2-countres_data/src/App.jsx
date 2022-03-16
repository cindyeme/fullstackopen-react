import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowButton from "./components/showButton";
import CountryDetails from "./components/countryDetails";
import Weather from "./components/Weather";

const api_key = process.env.REACT_APP_API_KEY;
// variable api_key has now the value set in startup

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [city, setCity] = useState("Helsinki");
  const [weather, setWeather] = useState({});

  // handle filter input change
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  // fiiltering countries
  const copyCountries = [...countries];
  const filteredCountry = copyCountries.filter((ctry) =>
    ctry.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  // API response from restcountries
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        // console.log(res.data);
        setCountries(res.data);
      })
      .catch((error) => console.log("Error in countries >>>>", error));
  }, []);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ textAlign: "center" }}>Find countries &nbsp;</h1>
        <input
          type="search"
          value={filter}
          onChange={handleChange}
          style={{ height: "40px", padding: "0 10px", fontSize: "16px" }}
        />
      </div>
      <>
        {filter === "" ? (
          <div>
            {countries.map((country, idx) => (
              <h3 key={idx} style={{ textAlign: "center" }}>
                {country?.name?.common}
              </h3>
            ))}
          </div>
        ) : filteredCountry.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : filteredCountry.length > 1 ? (
          <>
            {filteredCountry.map((country, idx) => {
              return (
                <div key={idx} style={{borderBottom: "2px solid #eee"}}>
                  <div style={{ margin: "20px 0" }}>
                    <span style={{ fontSize: "22px", fontWeight: "800" }}>
                      {country?.name?.common}
                    </span>
                    <ShowButton country={country} />
                  </div>
                </div>
              );
            })}
          </>
        ) : filteredCountry.length === 1 ? (
          <>
            {filteredCountry.map((country, idx) => {
              return (
                <div key={idx}>
                  <h1>{country?.name?.common}</h1>
                  <CountryDetails country={country} />
                  <Weather city={country?.capital} country={country} />
                </div>
              );
            })}
          </>
        ) : (
          <>
            <p>No matches!</p>
          </>
        )}
      </>
    </div>
  );
};

export default App;
