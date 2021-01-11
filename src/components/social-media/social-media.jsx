import React from "react"

import socialMediaStyles from "./social-media.module.scss"

export default function SocialMedia({ socialMedia }) {
  return (
    <div className={socialMediaStyles.socialMediaWrapper}>
      <ul className={socialMediaStyles.socialMediaList}>
        <li className={socialMediaStyles.socialMediaListItem}>
          <img src="" />
          <a href={socialMedia.href}>{socialMedia.name}</a>
        </li>
      </ul>
    </div>
  )
}
