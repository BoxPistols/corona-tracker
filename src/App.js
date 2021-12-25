import { useState } from "react"
import countriesApi from "./api/countries.json"
import { Top } from "./pages/Top"

function App() {
  const [country, setCountry] = useState()

  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <div className="App">
      <Top countriesApi={countriesApi} setCountry={setCountry} getCountryData={getCountryData} />
    </div>
  );
}

export default App;
