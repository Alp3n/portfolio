import React from "react"

import "./navbar-link.scss"

export default function NavbarLink({ title, href }) {
  return (
    <a className="navbar-link" href={href}>
      {title}
    </a>
  )
}
