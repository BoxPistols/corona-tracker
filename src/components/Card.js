import React from "react"

export default function Card() {
  const getAllCountersData = () => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }
  return (
    <div>
      <h2>Card</h2>
      <button onClick={getAllCountersData}>Get All Data</button>
    </div>
  )
}
