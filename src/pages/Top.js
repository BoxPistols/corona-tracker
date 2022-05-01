import { Header } from "../components/Header"
import { Results } from "../components/Results"
import { Selector } from "../components/Selector"
import { Title } from "../components/Title"

export const Top = (props) => {
  return (
    <div className="Top">
      <Header />
      <Title />
      <Selector
        countriesApi={props.countriesApi}
        setCountry={props.setCountry}
        getCountryData={props.getCountryData}
      />
      <Results countryData={props.countryData} />
    </div>
  )
}
