'use client'

import { logo } from '@/public/imgs'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5'
import { technologies } from '@/app/lib/data'
import { CopyToClipboard } from 'react-copy-to-clipboard'

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
    link: 'https://wa.me/56930616317',
  },
  {
    name: 'oscar.sancho.gonzalez@gmail.com',
    icon: <MdEmail size={iconChars.size} />,
    link: 'mailto:oscar.sancho.gonzalez@gmail.com',
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
    name: 'Ver currículum',
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

const notify = () =>
  window.alert('¡Email "oscar.sancho.gonzalez@gmail.com" copiado con éxito!')

const sizeLogo = 53

const Footer = () => {
  return (
    <div className='flex flex-col  mt-[9rem]'>
      <div className=' py-[4rem] mt-[7rem]  bg-secondarybg grid grid-cols-3'>
        <div className=' mt-1 flex flex-col items-center gap-[2rem]'>
          <a title='Óscar Sancho' href='/#home' className=''>
            <Image
              src={logo}
              alt="Óscar Sancho's logo"
              className='mx-auto transition-all duration-300 hover:w-[4rem]'
              width={sizeLogo}
              height={sizeLogo}
            />
          </a>

          <ul className=' flex flex-col gap-5 w-[22rem]'>
            {contacts.map(({ name, icon, link }) => (
              <li key={name}>
                {link.includes('@gmail.com') ? (
                  <CopyToClipboard text='oscar.sancho.gonzalez@gmail.com'>
                    <button
                      onClick={notify}
                      className='flex items-center gap-[.5rem] text-md transition-all duration-300 hover:font-bold hover:text-secondary'
                    >
                      {icon} <span>{name}</span>
                    </button>
                  </CopyToClipboard>
                ) : (
                  <a
                    key={name}
                    href={link}
                    target='_blank'
                    className='flex items-center gap-[.5rem] text-md transition-all duration-300 hover:font-bold hover:text-secondary'
                  >
                    {icon}
                    <span>{name}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col gap-6 justify-center items-center'>
          <h3 className='font-semibold text-primary text-xl'>Soluciones</h3>

          <ul className='list-disc'>
            {solutions.map((solution, index) => (
              <li className='mb-3 text-md' key={index}>
                {solution}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col items-center gap-10'>
          <span className='font-semibold text-primary text-xl'>
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
        <span className='text-sm'>
          &copy; 2024 Hecho con <span className='text-secondary'>♥️</span> por
          Óscar Sancho. Todos los derechos reservados.
        </span>
      </div>
    </div>
  )
}
export default Footer
