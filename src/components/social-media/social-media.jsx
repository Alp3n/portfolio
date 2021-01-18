import React from "react"
import { TiSocialGithubCircular } from "@react-icons/all-files/ti/TiSocialGithubCircular"
import { TiSocialLinkedinCircular } from "@react-icons/all-files/ti/TiSocialLinkedinCircular"
// import { TiSocialTwitterCircular } from "@react-icons/all-files/ti/TiSocialTwitterCircular"
// import { TiSocialInstagramCircular } from "@react-icons/all-files/ti/TiSocialInstagramCircular"
// import { TiSocialFacebookCircular } from "@react-icons/all-files/ti/TiSocialFacebookCircular"

import socialMediaStyles from "./social-media.module.scss"

export default function SocialMedia({ socialMedia }) {
  const { gitHub, linkedIn } = socialMedia
  return (
    <div className={socialMediaStyles.socialMediaWrapper}>
      <div>
        <a href={gitHub.href} target="_blank" rel="noreferrer" className="link">
          <TiSocialGithubCircular size="2.5em" className="icon" />
        </a>
      </div>
      <div>
        <a
          href={linkedIn.href}
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <TiSocialLinkedinCircular size="2.5em" className="icon" />
        </a>
      </div>
    </div>
  )
}
