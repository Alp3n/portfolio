import React from "react"
import footerStyles from "./footer.module.scss"

const name = "Adam Walukiewicz"
const year = 2021

export default function Footer() {
  return (
    <div className={footerStyles.footer}>
      <p>
        {name} &#169; {year}
      </p>
    </div>
  )
}
