import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiRedux, SiJest, SiExpress, SiSequelize  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { NextLogo } from "../ui/components/NextLogo"; 

export const technologies = [
  {name: 'HTML', icon: <FaHtml5 size={48} className='animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' />}, // 0
  {name: 'CSS', icon: <FaCss3Alt size={48} className='animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3'/>}, // 1
  {name: 'Tailwind CSS', icon: <SiTailwindcss size={48} className='animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' />}, // 2
  {name: 'JavaScript', icon: <IoLogoJavascript size={48} className='animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' />}, // 3
  {name: 'TypeScript', icon: <SiTypescript size={48} className='animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' />}, // 4
  {name: 'Node.js', icon: <FaNodeJs size={48} className='animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3'/>}, // 5
  {name: 'React', icon: <FaReact size={48} className='animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3'/> }, // 6
  {name: 'Redux', icon: <SiRedux size={48} className='animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3'/> }, // 7
  {name: 'Next.js', icon: <NextLogo size={48} className='animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3'/> }, // 8
  {name: 'Jest', icon: <SiJest size={48} className='animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3'/> },// 9
  {name: 'Express.js', icon: <SiExpress size={48} className='animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3'/> }, // 10
  {name: 'Sequelize', icon: <SiSequelize size={48} className='animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3'/> }, // 11
  {name: 'PostgreSQL', icon: <BiLogoPostgresql size={48} className='animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3'/> }, // 12
]

export const projects = [
  { 
    name: 'Mōru App',
    description: 'Mōru App es un E-commerce colombiano desarrollado para conectar comercios locales con su consumidores, fortaleciendo la economía local. Sus características principales son la búsqueda y filtrado de productos, sistema de geolocalización para encontrar tiendas cercanas y la gestión de pedidos y productos para los comercios, entre otras cosas.',
    year: '2023',
    image: 'https://res.cloudinary.com/dwadajlyw/image/upload/v1702847990/portfolio/projects/logoMoru.png',
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
    ]
  },
  { 
    name: 'Driver Race Finder',
    description: 'Driver Race Finder es una página web para explorar y obtener información detallada sobre los conductores de Fórmula 1. Para lograr esto, diseñé y desarrollé tanto el backend como el frontend de la plataforma. Sus características principales son el consumo de una API para obtener información actualizada, el desarrollo de una base de datos personalizada, herramientas de búsqueda y filtrado y una interfaz de usuario intuitiva y fácil de usar.',
    year: '2023',
    image: 'https://res.cloudinary.com/dwadajlyw/image/upload/v1702931781/portfolio/projects/driver-race-finder.png',
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
    ]
  },
  { 
    name: 'Todo App',
    description: 'Aplicación para crear lista de tareas, desarrollada con TypeScript. Sus características son la persistencia de datos en Local Storage, Filtrado de tareas, según su estado (completas/incompletas) y eliminación de tareas.',
    year: '2023',
    image: 'https://res.cloudinary.com/dwadajlyw/image/upload/v1700764508/portfolio/projects/TodoApp.png',
    link: 'https://to-do-sepia.vercel.app/',
    repository: 'https://github.com/oscarsanchog/To-do',
    technologies: [
      technologies[0],
      technologies[1],
      technologies[2],
      technologies[4],
      technologies[5],
      technologies[6],
    ]
  },
  
]

