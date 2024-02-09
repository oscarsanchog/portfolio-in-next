import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiRedux, SiJest, SiExpress, SiSequelize  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { NextLogo } from "../ui/components/NextLogo"; 

export const technologies = [
  {name: 'HTML', icon: <FaHtml5 />}, // 0
  {name: 'CSS', icon: <FaCss3Alt />}, // 1
  {name: 'Tailwind CSS', icon: <SiTailwindcss />}, // 2
  {name: 'JavaScript', icon: <IoLogoJavascript />}, // 3
  {name: 'TypeScript', icon: <SiTypescript />}, // 4
  {name: 'Node.js', icon: <FaNodeJs/>}, // 5
  {name: 'React', icon: <FaReact/> }, // 6
  {name: 'Redux', icon: <SiRedux/> }, // 7
  {name: 'Next.js', icon: <NextLogo/> }, // 8
  {name: 'Jest', icon: <SiJest/> },// 9
  {name: 'Express.js', icon: <SiExpress/> }, // 10
  {name: 'Sequelize', icon: <SiSequelize/> }, // 11
  {name: 'PostgreSQL', icon: <BiLogoPostgresql/> }, // 12
]

export const projects = [
  { 
    name: 'Mōru App',
    description: 'Aplicación para crear lista de tareas, desarrollada con TypeScript. Sus características son la persistencia de datos en Local Storage, Filtrado de tareas, según su estado (completas/incompletas) y eliminación de tareas.',
    image: 'https://res.cloudinary.com/dwadajlyw/image/upload/v1700764508/portfolio/projects/TodoApp.png',
    link: 'https://to-do-sepia.vercel.app/',
    repository: 'https://github.com/oscarsanchog/To-do',
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
  
]

