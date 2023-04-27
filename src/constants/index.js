import {
  mobile,
  backend,
  modeler,
  web,
  data,
  meta,
  starbucks,
  code,
  shopify,
  remed24,
  vay,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Programmer",
    icon: code,
  },
  {
    title: "Entreprise Application Developer",
    icon: data,
  },
  {
    title: "3D Graphics Designer",
    icon: modeler,
  },
];



const experiences = [
  {
    title: "Fullstack Laravel Developer",
    company_name: "Remed24Services",
    icon: remed24,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Mar 2022",
    points: [
      "Developing and maintaining web applications using Laravel and other related technologies.",
      "Collaborating with senior developers to create high-quality products.",
      "Implementing responsive design, data entry and processing functionnalities.",
    ],
  },
  {
    title: "Fullstack Laravel Developer",
    company_name: "NutritionStudy",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jul 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using Laravel and other related technologies.",
      "Collaborating with senior developers to create high-quality products.",
      "Implementing responsive design, data entry and processing functionnalities.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Vay",
    description:
      "E-Commerce Web-based C2C platform that allows users to search, buy, and sell products of any kind, providing e-commerce access to everybody at practically no cost.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "j2ee",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "springsecurity",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "darkblue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "pink-text-gradient",
      },
      {
        name: "oauth",
        color: "green-text-gradient",
      },
    ],
    image: vay,
    source_code_link: "https://github.com/SkywalkerD99/vay",
  },
  
];

export { services, experiences, testimonials, projects };
