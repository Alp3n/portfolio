import React from "react"

import "./card.scss"

export default function Card({ firstName, lastName, img, jobTitle, location }) {
  return (
    <div className="card">
      <div className="card-details">
        <div className="stack-wrapper">
          <p className="firstName">{firstName}</p>
          {/*<img className="image" src={img} alt="portrait" />*/}
          <div className="image"></div>
        </div>
        <p className="lastName">{lastName}</p>

        <p className="jobTitle">{jobTitle}</p>
        <p className="location">Based in {location}</p>
      </div>
    </div>
  )
}
