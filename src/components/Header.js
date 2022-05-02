import React from "react"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div className="Header">
      <nav>
        <ul style={{ display: "flex", flexDirection: "row" }}>
          <li>
            <Link to="/">選択</Link>
          </li>
          <li>
            <Link to="/world">世界</Link>
          </li>
        </ul>
      </nav>{" "}
    </div>
  )
}
