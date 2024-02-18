import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiJest,
  SiExpress,
  SiSequelize,
  SiNextdotjs,
  SiMui,
  SiPostman,
} from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io5'
import { BiLogoPostgresql } from 'react-icons/bi'

const iconSize = 55

const techNames = {
  html: 'HTML',
  css: 'CSS',
  sass: 'Sass',
  tailwindCss: 'Tailwind CSS',
  materialUI: 'Material UI',
  javaScript: 'JavaScript',
  typeScript: 'TypeScript',
  nodeJs: 'Node.js',
  react: 'React',
  redux: 'Redux',
  nextJs: 'Next.js',
  jest: 'Jest',
  expressJs: 'Express.js',
  sequelize: 'Sequelize',
  postman: 'Postman',
  postgreSQL: 'PostgreSQL',
}

const projectsName = {
  moruApp: 'Mōru App',
  driverRaceFinder: 'Driver Race Finder',
  todoApp: 'Todo App',
  portfolio: 'Portafolio'
}

const projectsLinks = {
  moruApp: 'https://moru.com.co/',
  driverRaceFinder: 'https://www.youtube.com/watch?v=Oa7BzmKtqho',
  todoApp: 'https://to-do-sepia.vercel.app/',
  portfolio: '/#home',
}

export const technologies = [
  {
    name: 'HTML', //0
    icon: <FaHtml5 title='HTML' size={iconSize} className='' />,
    projects: [
      { name: projectsName.moruApp, link: projectsLinks.moruApp },
      {
        name: projectsName.driverRaceFinder,
        link: projectsLinks.driverRaceFinder,
      },
      { name: projectsName.todoApp, link: projectsLinks.todoApp },
      { name: projectsName.portfolio, link: projectsLinks.portfolio },
    ],
  }, // 0
  {
    name: 'CSS', //1
    icon: <FaCss3Alt title='CSS' size={iconSize} className='' />,
    projects: [
      { name: projectsName.moruApp, link: projectsLinks.moruApp },
      {
        name: projectsName.driverRaceFinder,
        link: projectsLinks.driverRaceFinder,
      },
      { name: projectsName.todoApp, link: projectsLinks.todoApp },
      { name: projectsName.portfolio, link: projectsLinks.portfolio },
    ],
  }, // 1
  {
    name: 'Sass', //2
    icon: <FaSass title='Sass' size={iconSize} className='' />,
    projects: [],
  }, // 2
  {
    name: 'Tailwind CSS', //3
    icon: <SiTailwindcss title='Tailwind CSS' size={iconSize} className='' />,
    projects: [
      { name: projectsName.moruApp, link: projectsLinks.moruApp },
      { name: projectsName.portfolio, link: projectsLinks.portfolio },
    ],
  }, // 2
  {
    name: 'Material UI', //4
    icon: <SiMui title='Material UI' size={iconSize} className='' />,
    projects: [],
  }, // 12
  {
    name: 'JavaScript',  //5
    icon: <IoLogoJavascript title='JavaScript' size={iconSize} className='' />,
    projects: [
      { name: projectsName.moruApp, link: projectsLinks.moruApp },
      {
        name: projectsName.driverRaceFinder,
        link: projectsLinks.driverRaceFinder,
      },
      { name: projectsName.portfolio, link: projectsLinks.portfolio },
    ],
  }, // 3
  {
    name: 'TypeScript', //6
    icon: <SiTypescript title='TypeScript' size={iconSize - 2} className='' />,
    projects: [{ name: projectsName.todoApp, link: projectsLinks.todoApp }],
  }, // 4
  {
    name: 'Node.js', //7
    icon: <FaNodeJs title='Node.js' size={iconSize} className='' />,
    projects: [
      { name: projectsName.moruApp, link: projectsLinks.moruApp },
      {
        name: projectsName.driverRaceFinder,
        link: projectsLinks.driverRaceFinder,
      },
      { name: projectsName.todoApp, link: projectsLinks.todoApp },
      { name: projectsName.portfolio, link: projectsLinks.portfolio },
    ],
  }, // 5
  {
    name: 'React', //8
    icon: <FaReact title='React' size={iconSize} className='' />,
    projects: [
      { name: projectsName.moruApp, link: projectsLinks.moruApp },
      {
        name: projectsName.driverRaceFinder,
        link: projectsLinks.driverRaceFinder,
      },
      { name: projectsName.todoApp, link: projectsLinks.todoApp },
      { name: projectsName.portfolio, link: projectsLinks.portfolio },
    ],
  }, // 6
  {
    name: 'Redux', //9
    icon: <SiRedux title='Redux' size={iconSize} className='' />,
    projects: [
      { name: projectsName.moruApp, link: projectsLinks.moruApp },
      {
        name: projectsName.driverRaceFinder,
        link: projectsLinks.driverRaceFinder,
      },
    ],
  }, // 7
  {
    name: 'Next.js', //10
    icon: <SiNextdotjs title='Next.js' size={iconSize} className='' />,
    projects: [{ name: projectsName.portfolio, link: projectsLinks.portfolio }],
  }, // 8
  {
    name: 'Jest',
    icon: <SiJest title='Jest' size={iconSize} className='' />,
    projects: [
      {
        name: projectsName.driverRaceFinder,
        link: projectsLinks.driverRaceFinder,
      },
    ],
  }, // 9
  {
    name: 'Express.js',
    icon: <SiExpress title='Express.js' size={iconSize} className='' />,
    projects: [
      { name: projectsName.moruApp, link: projectsLinks.moruApp },
      {
        name: projectsName.driverRaceFinder,
        link: projectsLinks.driverRaceFinder,
      },
    ],
  }, // 10
  {
    name: 'Sequelize',
    icon: <SiSequelize title='Sequelize' size={iconSize} className='' />,
    projects: [
      { name: projectsName.moruApp, link: projectsLinks.moruApp },
      {
        name: projectsName.driverRaceFinder,
        link: projectsLinks.driverRaceFinder,
      },
    ],
  }, // 11
  {
    name: 'Postman',
    icon: <SiPostman title='Postman' size={iconSize} className='' />,
    projects: [
      projectsName.moruApp,
      projectsName.driverRaceFinder,
      { name: projectsName.moruApp, link: projectsLinks.moruApp },
      {
        name: projectsName.driverRaceFinder,
        link: projectsLinks.driverRaceFinder,
      },
    ],
  }, // 12
  {
    name: 'PostgreSQL',
    icon: <BiLogoPostgresql title='PostgreSQL' size={iconSize} className='' />,
    projects: [
      { name: projectsName.moruApp, link: projectsLinks.moruApp },
      {
        name: projectsName.driverRaceFinder,
        link: projectsLinks.driverRaceFinder,
      },
    ],
  }, // 12
]

export const projects = [
  {
    name: projectsName.moruApp,
    description:
      'Mōru App es un E-commerce colombiano desarrollado para conectar comercios locales con su consumidores, fortaleciendo la economía local. Sus características principales son la búsqueda y filtrado de productos, sistema de geolocalización para encontrar tiendas cercanas y la gestión de pedidos y productos para los comercios, entre otras cosas.',
    year: '2023',
    image:
      'https://res.cloudinary.com/dwadajlyw/image/upload/v1702847990/portfolio/projects/logoMoru.png',
    link: 'https://moru.com.co/',
    repository: null,
    technologies: [
      technologies[0],
      technologies[1],
      technologies[2],
      technologies[3],
      technologies[5],
      technologies[6],
      technologies[7],
      technologies[10],
      technologies[11],
      technologies[12],
    ],
  },
  {
    name: projectsName.driverRaceFinder,
    description:
      'Driver Race Finder es una página web para explorar y obtener información detallada sobre los conductores de Fórmula 1. Para lograr esto, diseñé y desarrollé tanto el backend como el frontend de la plataforma. Sus características principales son el consumo de una API para obtener información actualizada, el desarrollo de una base de datos personalizada, herramientas de búsqueda y filtrado y una interfaz de usuario intuitiva y fácil de usar.',
    year: '2023',
    image:
      'https://res.cloudinary.com/dwadajlyw/image/upload/v1702931781/portfolio/projects/driver-race-finder.png',
    link: 'https://www.youtube.com/watch?v=Oa7BzmKtqho',
    repository: 'https://github.com/oscarsanchog/PI-drivers',
    technologies: [
      technologies[0],
      technologies[1],
      technologies[3],
      technologies[5],
      technologies[6],
      technologies[7],
      technologies[10],
      technologies[11],
      technologies[12],
    ],
  },
  {
    name: projectsName.todoApp,
    description:
      'Aplicación para crear lista de tareas, desarrollada con TypeScript. Sus características son la persistencia de datos en Local Storage, Filtrado de tareas, según su estado (completas/incompletas) y eliminación de tareas.',
    year: '2023',
    image:
      'https://res.cloudinary.com/dwadajlyw/image/upload/v1700764508/portfolio/projects/TodoApp.png',
    link: 'https://to-do-sepia.vercel.app/',
    repository: 'https://github.com/oscarsanchog/To-do',
    technologies: [
      technologies[0],
      technologies[1],
      technologies[2],
      technologies[4],
      technologies[5],
      technologies[6],
    ],
  },
]
