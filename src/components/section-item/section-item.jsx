import React from "react"

import sectionItemStyles from "./section-item.module.scss"

export default function SectionItem({ item, isSimple, simpleText }) {
  return (
    <div className={sectionItemStyles.sectionItem}>
      {isSimple ? (
        <p className={sectionItemStyles.sectionItemText}>{simpleText}</p>
      ) : (
        <div>
          <a
            className={
              item.href === null
                ? sectionItemStyles.sectionItemTitle
                : sectionItemStyles.sectionItemTitleLink
            }
            href={item.href}
          >
            {item.title}
          </a>
          <p className={sectionItemStyles.sectionItemInfo}>{item.info}</p>
        </div>
      )}
    </div>
  )
}
