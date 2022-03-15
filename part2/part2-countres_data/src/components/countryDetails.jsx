import React from 'react';

const CountryDetails = (props) => {
  const { country } = props;
  return (
    <>
      <h4>Capital: {country?.capital}</h4>
      <h4>Area: {country?.area}</h4>
      <h4>Timezone: {country?.timezones}</h4>
      <h3>Currencies: </h3>
      <ul>
        {Object.keys(country?.currencies).map((currency, idx) => (
          <li key={idx}>{currency}</li>
        ))}
      </ul>
      <h3>Languages</h3>
      <ul>
        {Object.keys(country?.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <div>
        <img src={country?.flags?.png} alt="flag" />
      </div>
    </>
  );
}

export default CountryDetails;
