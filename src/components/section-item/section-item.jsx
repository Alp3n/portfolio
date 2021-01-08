import React from "react"

import "./section-item.scss"

export default function SectionItem({ item, isSimple, simpleText }) {
  return (
    <div className="section-item">
      {isSimple ? (
        <p className="section-item-text">{simpleText}</p>
      ) : (
        <div>
          <a
            className={
              item.href === null
                ? "section-item-title"
                : "section-item-title-link"
            }
            href={item.href}
          >
            {item.title}
          </a>
          <p className="section-item-info">{item.info}</p>
        </div>
      )}
    </div>
  )
}
