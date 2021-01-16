import React from "react"
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"

import socialMediaStyles from "./social-media.module.scss"

export default function SocialMedia({ socialMedia }) {
  const { gitHub, linkedIn } = socialMedia
  return (
    <div className={socialMediaStyles.socialMediaWrapper}>
      <div>
        <a href={gitHub.href} target="_blank" className="link">
          <FaGithubSquare size="2.5em" className="icon" />
        </a>
      </div>
      <div>
        <a href={linkedIn.href} target="_blank" className="link">
          <FaLinkedin size="2.5em" className="icon" />
        </a>
      </div>
    </div>
  )
}
