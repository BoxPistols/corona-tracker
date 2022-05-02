import React from "react"
import Card from "../components/Card"

function WorldPage(props) {
  return (
    <div>
      WorldPage
      <Card
        getAllCountersData={props.getAllCountersData}
        allCountriesData={props.allCountriesData}
      />
    </div>
  )
}

export default WorldPage
