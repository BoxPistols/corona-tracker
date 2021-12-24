import countriesApi from "../api/countries.json"

export const Selector = () => {
    // console.log(countriesApi);
    return (
        <div className="">
            <h1>Selector</h1>
            <select>
                {
                    countriesApi.map((country, index) =>
                    // @see https://ja.reactjs.org/docs/lists-and-keys.html#keys
                        <option key={country.Country}>
                            {index}:{country.Country}
                        </option>
                    )
                }
            </select>
        </div>
    )
};
