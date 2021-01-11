import React from "react"
import navbarStyles from "./navbar.module.scss"

export default function Navbar({ children }) {
  return <div className={navbarStyles.navbar}>{children}</div>
}
