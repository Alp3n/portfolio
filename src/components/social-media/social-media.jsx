import React from "react"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"

import socialMediaStyles from "./social-media.module.scss"

export default function SocialMedia({ socialMedia }) {
  return (
    <div className={socialMediaStyles.socialMediaWrapper}>
      <a href="www.github.com/alp3n" className="link">
        Alp3n
      </a>
      <FaGithub size="2em" className="icon" />
    </div>
  )
}
