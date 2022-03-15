import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowButton from "./components/showButton";
import CountryDetails from "./components/countryDetails";



const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  // handle filter input change
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  // fiiltering countries
  const copyCountries = [...countries];
  const filteredCountry = copyCountries.filter((ctry) =>
    ctry.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        console.log(res.data);
        setCountries(res.data);
      })
      .catch((error) => console.log("Error occured>>>>", error));
  }, []);

  return (
    <div>
      <div>
        Find countries &nbsp;
        <input type="search" value={filter} onChange={handleChange} />
      </div>
      <>
        {filter === "" ? (
          <div>
            {countries.map((country, idx) => (
              <h3 key={idx}>{country?.name?.common}</h3>
            ))}
          </div>
        ) : filteredCountry.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : filteredCountry.length > 1 ? (
          <>
            {filteredCountry.map((country, idx) => {
              return (
                <div key={idx}>
                  <div style={{margin: "20px 0"}}>
                    <span style={{fontSize: "20px", fontWeight: "800",}}>{country?.name?.common}</span>
                    <ShowButton country={country} />
                  </div>
                </div>
              );
            })}
          </>
        ) : filteredCountry.length === 1 ? (
          <>
            {filteredCountry.map((country, idx) => {
              console.log("Country currency >>>>", country.currencies);
              return (
                <div key={idx}>
                  <h2>{country?.name?.common}</h2>
                  <CountryDetails country={country} />
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
