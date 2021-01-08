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

      {isSimple ? (
        <SectionItem isSimple={isSimple} simpleText={simpleText} />
      ) : (
        itemsArray.map(item => <SectionItem key={item.title} item={item} />)
      )}
    </div>
  )
}
