import React from "react"
import SectionItem from "../section-item/section-item"
import "./section.scss"

export default function Section({
  sectionName,
  itemsArray,
  id,
  isSimple,
  simpleText,
}) {
  return (
    <div className="section-box" id={id}>
      <p className="section-name">{sectionName}</p>
      {itemsArray.map(item => (
        <SectionItem item={item} isSimple={isSimple} simpleText={simpleText} />
      ))}
    </div>
  )
}
