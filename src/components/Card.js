import { React, useState } from "react"

export default function Card(props) {
  // const [allCountriesData, setallCountriesData] = useState([])

  // const getAllCountersData = () => {
  //   fetch("https://api.covid19api.com/summary")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setallCountriesData(data.Countries)
  //     })
  // }
  return (
    <div>
      <h2>Card</h2>
      <div class="container">
        <div class="row" style={{ display: "flex", flexWrap: "wrap" }}>
          {props.allCountriesData.map((singleData) => (
            <div
              class="column"
              key={singleData.Country}
              style={{ width: "180px", margin: "10px" }}
            >
              <h3
                key={singleData.Country}
                style={{
                  backgroundColor: "#ececec",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                {singleData.Country}
              </h3>
              <div>新規感染者：{singleData.NewConfirmed.toLocaleString()}</div>
              <div>感染総数：{singleData.TotalConfirmed.toLocaleString()}</div>
              <dd>総死者数：{singleData.TotalDeaths.toLocaleString()}</dd>
              <div></div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={props.getAllCountersData}>Get All Data</button>
    </div>
  )
}
