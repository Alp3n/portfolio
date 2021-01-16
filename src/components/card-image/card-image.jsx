import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import cardImageStyles from "./card-image.module.scss"

export default function CardImage() {
  const [animated, setAnimated] = useState(false)
  return (
    <StaticQuery
      query={graphql`
        query ImageQuery {
          portrait: file(relativePath: { eq: "me.jpg" }) {
            childImageSharp {
              fixed(width: 120, height: 120) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <div
          aria-hidden="true"
          onMouseEnter={() => setAnimated(() => true)}
          onAnimationEnd={() => setAnimated(() => false)}
          className={
            animated ? cardImageStyles.imageAnimated : cardImageStyles.image
          }
        >
          <Img
            fixed={data.portrait.childImageSharp.fixed}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="portrait"
            className={cardImageStyles.portrait}
          />
        </div>
      )}
    />
  )
}
