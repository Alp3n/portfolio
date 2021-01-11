import React from "react"

import navbarLinkStyles from "./navbar-link.module.scss"

export default function NavbarLink({ title, href }) {
  return (
    <a className={navbarLinkStyles.navbarLink} href={href}>
      {title}
    </a>
  )
}
