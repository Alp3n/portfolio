export const data = {
  firstName: "Adam",
  lastName: "Walukiewicz",
  jobTitle: "front end web developer",
  location: "Bangkok, Thailand",
  img: "/images/me.jpg",
  socialMedia: {
    gitHub: {
      name: "GitHub",
      href: "https://github.com/alp3n",
    },
    linkedIn: {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/adam-walukiewicz-b08bb9164",
    },
  },
  sections: [
    {
      id: "aboutMe",
      isSimple: true,
      name: "About me",
      simpleText:
        "I am an IT student at Stamford International University located in Bangkok, Thailand. Right now I am finishing my senior year and focusing on my Web Development skills. I like to make a useful and pretty software as also websites. I am always eager to learn something new by myself but also appreciate knowledge from others.",
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
          info: "Node.js, Express.js",
          href: null,
        },
        { title: "Databases", info: "MySQL, SQLite, MongoDB", href: null },
        {
          title: "Other",
          info: "Git, REST, GraphQL, Gatsby, WordPress, Domains",
          href: null,
        },
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
        {
          title: "Freelance jobs at useme.com",
          info: "Mostly websites, January 2021 - present",
          href: "https://useme.com/pl/",
        },
      ],
    },
    {
      id: "education",
      isSimple: false,
      name: "Education",
      items: [
        {
          title: "Stamford International University - Bangkok, Thailand",
          info: "BSc in Information Technology, October 2018 - February 2021",
          href: null,
        },
      ],
    },
    {
      id: "projects",
      isSimple: false,
      name: "Projects",
      items: [
        {
          title: "nhinstitute",
          info:
            "Business website made with GatsbyJS, i18n, based on graphic design.",
          href: "https://nhinstitute.pl",
        },
        {
          title: "nhi-forms",
          info:
            "Application for managing and delivering custome forms for NHInstitute.",
          href: "https://github.com/Alp3n/nhi-forms",
        },
        {
          title: "tenfertil",
          info:
            "Product website made with GatsbyJS, i18n, based on graphic design.",
          href: "https://tenfertil.pl",
        },
        {
          title: "WMES - Balancing",
          info: "PWA for Signify Kętrzyn, made with ReactJS.",
          href: "https://github.com/alp3n/wmes-balansowanie",
        },
        {
          title: "tenfertil ona",
          info:
            "Product website made with GatsbyJS, i18n, based on graphic design.",
          href: "https://tenfertilona.pl",
        },
        {
          title: "Simple Portfolio Template",
          info:
            "Gatsby portfolio template, just like the one you are browsing right now.",
          href: "https://github.com/alp3n/portfolio",
        },
        {
          title: "ThaiFood",
          info:
            "Create food stall orders and translate them to Thai! (in-progress)",
          href: "https://github.com/alp3n/thaifood-client",
        },
      ],
    },
  ],
}
