import React from "react"

import SEO from "../components/seo/SEO"
import PageLayout from "../components/page-layout/page-layout"
import Card from "../components/card/card"
import Section from "../components/section/section"
import Form from "../components/form/form"

import "../styles/index.scss"
// import SocialMedia from "../components/social-media/social-media"

import { data } from "../data/data"

const IndexPage = () => {
  return (
    <PageLayout>
      <SEO />
      <Card
        firstName={data.firstName}
        lastName={data.lastName}
        jobTitle={data.jobTitle}
        location={data.location}
        img={data.img}
        socialMedia={data.socialMedia}
      />
      {data.sections.map(section => (
        <Section
          key={section.id}
          sectionName={section.name}
          itemsArray={section.items}
          id={section.id}
          isSimple={section.isSimple}
          simpleText={section.simpleText}
        />
      ))}
      <Form />
    </PageLayout>
  )
}

export default IndexPage
