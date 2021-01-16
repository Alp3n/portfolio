import React from "react"

import cardStyles from "./card.module.scss"

import CardImage from "../card-image/card-image"
import SocialMedia from "../social-media/social-media"

export default function Card({
  firstName,
  lastName,
  jobTitle,
  location,
  socialMedia,
}) {
  return (
    <div className={cardStyles.card} id="about">
      <div className={cardStyles.cardDetails}>
        <div className={cardStyles.stackWrapper}>
          <p className={cardStyles.firstName}>{firstName}</p>
          <CardImage />
        </div>
        <p className={cardStyles.lastName}>{lastName}</p>

        <p className={cardStyles.jobTitle}>{jobTitle}</p>
        <p className={cardStyles.location}>Based in {location}</p>
      </div>
      <SocialMedia socialMedia={socialMedia} />
    </div>
  )
}
