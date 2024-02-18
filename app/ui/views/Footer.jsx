import { logo } from '@/public/imgs'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5'
import { technologies } from '@/app/lib/data'
import { robotoMono } from '../fonts'

const iconChars = {
  size: 18,
  color: 'text-primary',
  transition:
    'transition-all duration-300 hover:font-bold hover:text-secondary hover:size-[6rem]',
}

const contacts = [
  {
    name: '+56 9 3061 6317',
    icon: <FaWhatsapp size={iconChars.size} />,
    link: 'https://wa.me/qr/QMCPQCFJUCOAN1',
  },
  {
    name: 'oscar.sancho.gonzalez@gmail.com',
    icon: <MdEmail size={iconChars.size} />,
    link: 'oscar.sancho.gonzalez@gmail.com',
  },
  {
    name: 'linkedin.com/in/oscarsanchog',
    icon: <FaLinkedin size={iconChars.size} />,
    link: 'https://www.linkedin.com/in/oscarsanchog/',
  },
  {
    name: 'github.com/oscarsanchog',
    icon: <FaGithub size={iconChars.size} />,
    link: 'https://github.com/oscarsanchog',
  },
  {
    name: 'Ver Currículum',
    icon: <IoDocumentText size={iconChars.size} />,
    link: 'https://drive.google.com/file/d/1f9EPuv6IzqY9B4Kw-AiI3Bj9ukwVh-a2/view?usp=sharing',
  },
]

const techs = [
  technologies[0],
  technologies[1],
  technologies[3],
  technologies[5],
  technologies[7],
  technologies[8],
  technologies[10],
]

const solutions = [
  'Desarrollo de Sitios Web Dinámicos',
  'Optimización de Desempeño',
  'Integración de APIs y Servicios Externos',
  'Desarrollo de Temas y Plugins para CMS',
  'Mantenimiento y Actualización',
  'Desarrollo de Landing Pages',
  'Tecnologías acordes al mercado',
]

const Footer = () => {
  return (
    <div className='flex flex-col '>
      <div className=' py-[4rem] mt-[7rem]  bg-secondarybg grid grid-cols-3'>
        <div className=' mt-1 flex flex-col items-center gap-[2rem]'>
          <a title='Óscar Sancho' href='/#home' className=''>
            <Image
              src={logo}
              alt="Óscar Sancho's logo"
              className='mx-auto transition-all duration-300 hover:w-[4rem]'
              width={59.2}
              height={59.2}
            />
          </a>

          <div className=' flex flex-col gap-5 w-[22rem]'>
            {contacts.map(({ name, icon, link }) => (
              <a
                key={name}
                href={link}
                target='_blank'
                className='flex items-center gap-[.5rem] text-xl transition-all duration-300 hover:font-bold hover:text-secondary'
              >
                {icon}
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-6 justify-center items-center'>
          <h3 className='font-semibold text-primary text-2xl'>Soluciones</h3>

          <ul className='list-disc'>
            {solutions.map((solution, index) => (
              <li className='mb-3 text-xl' key={index}>
                {solution}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col items-center gap-14'>
          <span className='font-semibold text-primary text-2xl'>
            Sitio desarrollado con:
          </span>

          <ul className='flex flex-wrap w-[20rem] justify-center gap-9'>
            {techs.map(({ name, icon }) => (
              <li key={name} title={name}>
                {icon}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className=' bg-secondarybg '>
        <span className=''>
          &copy; 2024 Hecho con <span className='text-secondary'>♥️</span> por
          Óscar Sancho. Todos los derechos reservados.
        </span>
      </div>
    </div>
  )
}
export default Footer
