import React from "react"

import "./social-media.scss"

export default function SocialMedia({ socialMedia }) {
  return (
    <div className="social-media-wrapper">
      <ul className="social-media-list">
        <li className="social-media-list-item">
          <img src="" />
          <a href={socialMedia.href}>{socialMedia.name}</a>
        </li>
      </ul>
    </div>
  )
}
