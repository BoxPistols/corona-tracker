import countriesApi from "../api/countries.json"

export const Selector = () => {
    // console.log(countriesApi);
    return (
        <div className="">
            <h1>Selector</h1>
            <select>
                {
                    countriesApi.map((c) =>
                        <option>
                            {c.Country}
                        </option>
                    )
                }
            </select>
        </div>
    )
};
