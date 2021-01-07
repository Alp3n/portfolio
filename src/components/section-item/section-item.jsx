import React from "react"

import "./section-item.scss"

export default function SectionItem({ item, isSimple, simpleText }) {
  return (
    <div className="section-item">
      {isSimple ? (
        <p className="section-text">{simpleText}</p>
      ) : (
        <div>
          <a className="section-title" href={item.link}>
            {item.title}
          </a>
          <p className="section-info">{item.info}</p>
        </div>
      )}
    </div>
  )
}
