import React from "react"
// import { Link } from "gatsby"
import PageLayout from "../components/page-layout/page-layout"
import Card from "../components/card/card"
import Section from "../components/section/section"
import Form from "../components/form/form"

import "../styles/index.scss"
import SocialMedia from "../components/social-media/social-media"

const data = {
  firstName: "Adam",
  lastName: "Walukiewicz",
  jobTitle: "full stack web developer",
  location: "Bangkok, Thailand",
  img: "/images/me.jpg",
  socialMedia: [
    {
      gitHub: {
        href: "https://github.com/alp3n",
        icon: "../images/svg/005-github.svg",
      },
      linkedIn: {
        href: "link",
        icon: "../images/icon",
      },
      twitter: {
        href: "link",
        icon: "../images/icon",
      },
      facebook: {
        href: "link",
        icon: "../images/icon",
      },
      instagram: {
        href: "link",
        icon: "../images/icon",
      },
    },
  ],
  sections: [
    {
      id: "aboutMe",
      isSimple: true,
      name: "About me",
      simpleText:
        "I am an IT student at Stamford International University located in Bangkok, Thailand. Right now I am finishing my senior year and focusing on my Web Development skills. I like to make USEFULL and PRETTY software. I am always eager to learn something new by myself but also appriciate knowledge from others.",
      items: null,
    },
    {
      id: "skills",
      isSimple: false,
      name: "Skills",
      items: [
        {
          title: "Front End",
          info: "HTML5, CSS3, SCSS, JavaScript, React",
          href: null,
        },
        {
          title: "Back End",
          info: "Node.js, Express.js, REST, GraphQL",
          href: null,
        },
        { title: "Databases", info: "MySQL, SQLite, MongoDB", href: null },
      ],
    },
    {
      id: "experience",
      isSimple: false,
      name: "Experience",
      items: [
        {
          title: "Signify Poland, Kętrzyn",
          info: "Onsite IT Support, May 2017 - February 2018",
          href: "https://www.signify.com/",
        },
      ],
    },
    {
      id: "projects",
      isSimple: false,
      name: "Projects",
      items: [
        {
          title: "ThaiFood",
          info: "Create food stall orders and translate them to Thai!",
          href: "https://github.com/alp3n/thaifood-client",
        },
        {
          title: "Simple Portfolio Generator",
          info:
            "Gatsby portfolio generator, just like the one you are browsing right now",
          href: "https://github.com/alp3n/portfolio",
        },
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
        img={data.img}
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
