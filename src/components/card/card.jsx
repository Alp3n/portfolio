import React from "react"

import cardStyles from "./card.module.scss"

export default function Card({ firstName, lastName, img, jobTitle, location }) {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.cardDetails}>
        <div className={cardStyles.stackWrapper}>
          <p className={cardStyles.firstName}>{firstName}</p>
          {/*<img className="image" src={img} alt="portrait" />*/}
          <div className={cardStyles.image}></div>
        </div>
        <p className={cardStyles.lastName}>{lastName}</p>

        <p className={cardStyles.jobTitle}>{jobTitle}</p>
        <p className={cardStyles.location}>Based in {location}</p>
      </div>
    </div>
  )
}
