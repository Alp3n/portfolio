import React from "react"

import sectionItemStyles from "./section-item.module.scss"

export default function SectionItem({ item, isSimple, simpleText }) {
  return (
    <div className={sectionItemStyles.sectionItem}>
      {isSimple ? (
        <p className={sectionItemStyles.sectionItemText}>{simpleText}</p>
      ) : item.href ? (
        <div>
          <a
            className={sectionItemStyles.sectionItemTitleLink}
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            {item.title}
          </a>
          <p className={sectionItemStyles.sectionItemInfo}>{item.info}</p>
        </div>
      ) : (
        <div>
          <p className={sectionItemStyles.sectionItemTitle}>{item.title}</p>
          <p className={sectionItemStyles.sectionItemInfo}>{item.info}</p>
        </div>
      )}
    </div>
  )
}
