import { useState, useEffect } from "react"
import countriesApi from "./api/countries.json"
import { Top } from "./pages/Top"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WorldPage from "./pages/WorldPage"
import "./index.css"

function App() {
  const [country, setCountry] = useState("Japan")
  // WorldPageに渡すデータを取得する関数
  const [allCountriesData, setallCountriesData] = useState([])
  const getAllCountersData = () => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => {
        setallCountriesData(data.Countries)
      })
  }

  // FIXME! 日本のデータだけ取得
  // const japaneseData = allCountriesData.filter(
  //   (country) => country.Country === "Japan"
  // )
  // console.log(japaneseData[0].Country)
  // console.log(japaneseData[0].NewConfirmed)
  // const JPNewConfirmed = japaneseData[0].NewConfirmed

  // 国別のデータを取得する関数
  /** 取得したいデータ：
   * 日付
   * 新規感染者
   * 感染者総数
   * 新規回復者
   * 回復者総数
   */
  const [countryData, setCountryData] = useState({
    dateGet: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecoverd: "",
    totalRecoverd: "",
    totalRecoverd: "",
    newDeaths: "",
    totalDeaths: "",
  })

  const getCountryData = () => {
    const newDay = (x) => {
      return x - 1
    }
    const prevDay = (x) => {
      return x - 2
    }

    fetch(`https://api.covid19api.com/country/${country}`)
      .then((res) => res.json())
      // .then(data => { console.log(data[(newDay(data.length) - prevDay(data.length))].Confirmed) })
      .then((data) => {
        setCountryData({
          dateGet: data[newDay(data.length)].Date,
          newConfirmed:
            data[newDay(data.length)].Confirmed -
            data[prevDay(data.length)].Confirmed,
          totalConfirmed: data[newDay(data.length)].Confirmed,
          newRecoverd:
            data[newDay(data.length)].Recovered -
            data[prevDay(data.length)].Recovered,
          totalRecoverd: data[newDay(data.length)].Recovered,
          newDeaths:
            data[newDay(data.length)].Deaths -
            data[prevDay(data.length)].Deaths,
          totalDeaths: data[newDay(data.length)].Deaths,
        })
      })
    // TODO: エラー対応
  }

  useEffect(() => {
    getAllCountersData()
  }, [])

  useEffect(() => {
    setCountry("Japan")
  }, [])

  return (
    <div className="App">
      {/* {console.log(countryData)} */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Top
                defaultValue="Japan"
                countriesApi={countriesApi}
                setCountry={setCountry}
                getCountryData={getCountryData}
                countryData={countryData}
              />
            }
          />
          {/* TODO: Routing */}
          <Route
            path="/world"
            element={
              <WorldPage
                getAllCountersData={getAllCountersData}
                allCountriesData={allCountriesData}
                // japaneseData={japaneseData}
                // JPNewConfirmed={JPNewConfirmed}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <Top
        countriesApi={countriesApi}
        setCountry={setCountry}
        getCountryData={getCountryData}
        countryData={countryData}
      /> */}
    </div>
  )
}

export default App

/* データサンプル
{
  "ID": "b9d5c989-e5c4-4863-a693-da4a132a9bc2",
  "Country": "Japan", 国名
  "CountryCode": "JP", 国コード
  "Confirmed": 2, 感染者
  "Deaths": 0, 死者数
  "Recovered": 0, 回復者
  "Active": 2,
  "Date": "2020-01-22T00:00:00Z" 日付
}
 */
