import React from "react"
import Navbar from "../navbar/navbar"
import NavbarLink from "../navbar-link/navbar-link"

import pageLayoutStyles from "./page-layout.module.scss"

const links = [
  {
    id: 1,
    title: "about",
    href: "#about",
  },
  {
    id: 2,
    title: "projects",
    href: "#projects",
  },
  {
    id: 3,
    title: "contact",
    href: "#contact",
  },
]

export default function PageLayout({ children }) {
  return (
    <div className={pageLayoutStyles.pageLayout}>
      <Navbar>
        {links.map(link => (
          <NavbarLink key={link.id} href={link.href} title={link.title} />
        ))}
      </Navbar>
      <div className={pageLayoutStyles.main}>{children}</div>
    </div>
  )
}
