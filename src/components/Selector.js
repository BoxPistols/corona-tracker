import { useState } from "react";
import countriesApi from "../api/countries.json"

export const Selector = () => {
    // console.log(countriesApi);
    const [country, setCountry] = useState(countriesApi[0].Country)

    const getCountryData = () => {
        fetch("https://api.covid19api.com/country/japan")
        .then(res=> res.json())
        .then(data => console.log(data))
    }

    return (
        <div className="">
            <h1>Selector</h1>
            <select onChange={(e)=> setCountry(e.target.value)}>
                {
                    countriesApi.map((country, index) =>
                    // @see https://ja.reactjs.org/docs/lists-and-keys.html#keys
                        <option key={index} value={country.Slug}>
                            {index}:{country.Country}
                        </option>
                    )
                }
            </select>
            <p>{country}</p>
            <button onClick={getCountryData}>Get Data</button>
        </div>
    )

};
