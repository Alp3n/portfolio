export const data = {
  firstName: "Adam",
  lastName: "Walukiewicz",
  jobTitle: "full stack web developer",
  location: "Bangkok, Thailand",
  img: "/images/me.jpg",
  socialMedia: {
    gitHub: {
      name: "GitHub",
      href: "https://github.com/alp3n",
      // icon: "../images/svg/005-github.svg",
    },
    linkedIn: {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/adam-walukiewicz-b08bb9164",
      // icon: "../images/svg/004-linkedin.svg",
    },
    // twitter: {
    //   href: "link",
    //   icon: "../images/svg/002-twitter.svg",
    // },
    // facebook: {
    //   href: "link",
    //   icon: "../images/svg/003-facebook.svg",
    // },
    // instagram: {
    //   href: "link",
    //   icon: "../images/svg/001-instagram.svg",
    // },
  },
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
          info:
            "Create food stall orders and translate them to Thai! (in-progress)",
          href: "https://github.com/alp3n/thaifood-client",
        },
        {
          title: "Simple Portfolio Template",
          info:
            "Gatsby portfolio template, just like the one you are browsing right now. (ready)",
          href: "https://github.com/alp3n/portfolio",
        },
      ],
    },
  ],
}
