import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    reactIcon,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "React.Js Developer",
      icon: reactIcon,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Mysql",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Bootstrap",
      icon: mongodb,
    },
    {
      name: "Spring boot",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "mui",
      icon: figma,
    },
    {
      name: "java",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "UI/UX Developer",
      company_name: "Axium Global Pvt Ltd",
      icon: tesla,
      iconBg: "grey",
      date: "Aug 2023 - Present",
      points: [
        "Collaborate with the development team to understand project requirements and contribute to the design and implementation of frontend solutions.",
        "Assist in developing and maintaining user interfaces for web applications and websites.",
        "Implement responsive designs and ensure cross-browser compatibility.",
        "Collaborate with backend developers to integrate frontend logic with server-side functionality.",
        "Conduct testing and debugging of frontend applications to ensure functionality and user-friendliness.",
      ],
    },
    {
      title: "Back End Developer-Intern",
      company_name: "INFOTRIXS",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sep 2023 - Oct 2023",
      points: [
        "Creating, maintaining, testing, and debugging the entire back end of an application or system.",
        "This includes the core application logic, databases, data and application integration, API.",
        "Collaborating with the Front-End development team to understand project requirements a implementation of Backend solutions.",
        "Skills: Spring Boot,Core Java,Hibernate,Mysql"
      ],
    },
    {
      title: "Sport Analyst",
      company_name: "HUDL SPORTSTEC",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jun 2018 - Apr 2020",
      points: [
        "Responsible for tagging different sports like American Football, Volleyball, Basketball, Soccer, Lacrosse, and Ice Hockey on Hudl Assist platform.",
        "Quality checking of tagged games.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:"Java Full stack Course",
      name: "TryCatch Classes - Mumbai",
      designation: "Skills: Html,Css,Javasvcript,React.Js,Bootstrap,Core Java,Spring Boot, Microservices,Mysql",
      company: "2022-2023",
    },
    {
      testimonial:"Bachelor Of Engineering - Computer",
      name: "Universal College Of Engineering - Mumbai",
      designation: "2013-2017",
      company: "CGPI : 7.39",
    },
    {
      testimonial:"H.S.C.",
      name: "Prakash College-Mumbai",
      designation: "2011-2013",
      company: "Percentage : 67.5%",
    },
    {
      testimonial:"S.S.C.",
      name: "Gokhale HighSchool-Mumbai",
      designation: "2011",
      company: "Percentage : 84%",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Url-Shorten API",
      description:
      "Url Shortener creates a short link from a very long URL. Clicking on a short URL, the user will be redirected to the original URL",
      tags: [
        {
          name: "Core Java",
          color: "blue-text-gradient",
        },
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "Hibernate",
          color: "pink-text-gradient",
        },
        {
          name: "Mysql",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      live_link:"",
      source_code_link: "https://github.com/moreswapnil95/UrlShortner.git",
    },
    {
      name: "Markers on Map",
      description:
           "This helps to create multiples markers on map and on click it shows the data. That data also store in table format." ,  
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      live_link:"https://moreswapnil95.github.io/react-map/",
      source_code_link: "https://github.com/moreswapnil95/react-map.git",
    },
    {
      name: "Dynamic Form",
      description:
        "selecting options from dropdown menu you can create and delete some part from form.After that you can submit the form and enter the details it shows result in last div",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "Es6",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      live_link:"https://moreswapnil95.github.io/Dynamic-Form/",
      source_code_link: "https://github.com/moreswapnil95/Dynamic-Form.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
