import React from "react"
import { Link } from "react-scroll"

import navbarLinkStyles from "./navbar-link.module.scss"

export default function NavbarLink({ title, href }) {
  return (
    <Link className={navbarLinkStyles.navbarLink} to={title} smooth={true}>
      {title}
    </Link>
  )
}
