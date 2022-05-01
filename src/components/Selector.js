// import { useState } from "react";
// import countriesApi from "../api/countries.json"

export const Selector = (props) => {
  return (
    <div className="selector">
      <select onChange={(e) => props.setCountry(e.target.value)}>
        <option>Select Country</option>
        {props.countriesApi.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
      <button onClick={props.getCountryData}>Get Data</button>
    </div>
  )
}

// @see for key-on-map https://ja.reactjs.org/docs/lists-and-keys.html#keys
