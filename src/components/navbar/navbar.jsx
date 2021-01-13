import React from "react"
import navbarStyles from "./navbar.module.scss"

export default function Navbar({ children }) {
  return (
    <div className={navbarStyles.navbar}>
      <div className={navbarStyles.navbarLinks}>{children}</div>
    </div>
  )
}
