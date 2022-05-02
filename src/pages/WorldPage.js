import React from "react"
import Card from "../components/Card"
import { Header } from "../components/Header"

function WorldPage(props) {
  return (
    <div>
      <Header />
      <Card
        getAllCountersData={props.getAllCountersData}
        allCountriesData={props.allCountriesData}
      />
    </div>
  )
}

export default WorldPage
