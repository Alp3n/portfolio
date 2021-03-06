import React from "react"
import Navbar from "../navbar/navbar"
import NavbarLink from "../navbar-link/navbar-link"

//optional
// import Footer from "../footer/footer"

import pageLayoutStyles from "./page-layout.module.scss"

const links = [
  {
    title: "about",
    href: "#about",
  },
  {
    title: "projects",
    href: "#projects",
  },
  {
    title: "contact",
    href: "#contact",
  },
]

export default function PageLayout({ children }) {
  return (
    <div>
      <Navbar>
        {links.map(link => (
          <NavbarLink key={link.title} href={link.href} title={link.title} />
        ))}
      </Navbar>
      <div className={pageLayoutStyles.main}>{children}</div>
      {/*Optional */}
      {/*<Footer />*/}
    </div>
  )
}
