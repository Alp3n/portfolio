import React from "react"
import SectionItem from "../section-item/section-item"
import sectionStyles from "./section.module.scss"

export default function Section({
  sectionName,
  itemsArray,
  id,
  isSimple,
  simpleText,
}) {
  return (
    <div className={sectionStyles.sectionBox} id={id}>
      <p className={sectionStyles.sectionName}>{sectionName}</p>

      {isSimple ? (
        <SectionItem isSimple={isSimple} simpleText={simpleText} />
      ) : (
        itemsArray.map(item => <SectionItem key={item.title} item={item} />)
      )}
    </div>
  )
}
