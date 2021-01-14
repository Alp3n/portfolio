import React, { useState } from "react"

import cardStyles from "./card.module.scss"

export default function Card({ firstName, lastName, img, jobTitle, location }) {
  const [animated, setAnimated] = useState(false)
  return (
    <div className={cardStyles.card} id="about">
      <div className={cardStyles.cardDetails}>
        <div className={cardStyles.stackWrapper}>
          <p className={cardStyles.firstName}>{firstName}</p>
          <div
            onMouseEnter={() => setAnimated(() => true)}
            onAnimationEnd={() => setAnimated(() => false)}
            className={animated ? cardStyles.imageAnimated : cardStyles.image}
          ></div>
        </div>
        <p className={cardStyles.lastName}>{lastName}</p>

        <p className={cardStyles.jobTitle}>{jobTitle}</p>
        <p className={cardStyles.location}>Based in {location}</p>
      </div>
    </div>
  )
}
