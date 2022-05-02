import { React, Fragment, useState } from "react"

export default function Card() {
  const [allCountriesData, setallCountriesData] = useState([])

  const getAllCountersData = () => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => {
        setallCountriesData(data.Countries)
      })
  }
  return (
    <div>
      <h2>Card</h2>
      <button onClick={getAllCountersData}>Get All Data</button>
      {allCountriesData.map((singleData) => (
        <div
          className="d-flex"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          key={singleData.Country}
        >
          <h3>{singleData.Country}</h3>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              listStyle: "none",
            }}
          >
            <li>新規感染者：{singleData.NewConfirmed}</li>
            <li>感染総数：{singleData.TotalConfirmed}</li>
            <li>新規回復者</li>
          </ul>
        </div>
      ))}
    </div>
  )
}
