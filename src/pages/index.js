import React from "react"
// import { Link } from "gatsby"
import PageLayout from "../components/page-layout/page-layout"
import Card from "../components/card/card"
import Section from "../components/section/section"

const data = {
  firstName: "Adam",
  lastName: "Walukiewicz",
  jobTitle: "full stack web developer",
  location: "Bangkok, Thailand",
  socialMedia: {
    gitHub: "link",
    linkedIn: "link",
    twitter: "link",
    facebook: "link",
  },
  sections: [
    {
      id: "about",
      isSimple: true,
      name: "About me",
      simpleText: "something about me",
      items: [
        { title: "something", info: "something", href: null },
        { title: "something", info: "something", href: null },
        { title: "something", info: "something", href: null },
        { title: "something", info: "something", href: null },
      ],
    },
    {
      id: "skills",
      isSimple: false,
      name: "Skills",
      items: [
        { title: "something", info: "something", href: null },
        { title: "something", info: "something", href: null },
        { title: "something", info: "something", href: null },
      ],
    },
    {
      id: "experience",
      isSimple: false,
      name: "Experience",
      items: [
        { title: "something", info: "something", href: null },
        { title: "something", info: "something", href: null },
        { title: "something", info: "something", href: null },
      ],
    },
    {
      id: "projects",
      isSimple: false,
      name: "Projects",
      items: [
        { title: "something", info: "something", href: null },
        { title: "something", info: "something", href: null },
        { title: "something", info: "something", href: null },
      ],
    },
  ],
}

const IndexPage = () => {
  return (
    <PageLayout>
      <Card
        firstName={data.firstName}
        lastName={data.lastName}
        jobTitle={data.jobTitle}
        location={data.location}
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
    </PageLayout>
  )
}

export default IndexPage
