import { useState } from "react";
import countriesApi from "../api/countries.json"

export const Selector = () => {
  // console.log(countriesApi);
  const [country, setCountry] = useState(countriesApi[0].Country)

  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <div className="">
      <h2>Select Country</h2>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option>Select Country</option>
        {
          countriesApi.map((country, index) =>
            <option key={index} value={country.Slug}>
              {index}:{country.Country}
            </option>
          )
        }
      </select>
      <button onClick={getCountryData}>Get Data</button>
    </div>
  )
};

// @see for key-on-map https://ja.reactjs.org/docs/lists-and-keys.html#keys