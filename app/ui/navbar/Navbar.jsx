'use client'

import { IoMdPerson } from 'react-icons/io'
import { MdBusinessCenter, MdOutlineComputer, MdEmail } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoMenu } from 'react-icons/io5'

import { useState } from 'react'
import { logo } from '@/public/img'

const navigation = [
  { name: 'Sobre mí', href: '/#home', icon: <IoMdPerson />, current: true },
  {
    name: 'Proyectos',
    href: '/#projects',
    icon: <MdBusinessCenter />,
    current: false,
  },
  {
    name: 'Skills',
    href: '/#skills',
    icon: <MdOutlineComputer />,
    current: false,
  },
  { name: 'Contacto', href: '/#contact', icon: <MdEmail />, current: false },
]

const contactLinks = [
  { href: 'https://www.linkedin.com/in/oscarsanchog/', icon: <FaLinkedin /> },
  { href: 'https://github.com/oscarsanchog', icon: <FaGithub /> },
  { href: 'oscar.sancho.gonzalez@gmail.com', icon: <MdEmail /> },
]

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <>
      <nav className='grid grid-cols-3' aria-hidden={mobileMenuOpen && 'true'}>
        <button className='md:hidden' onClick={toggleMobileMenu}>
          <IoMenu />
        </button>

        <ul className='hidden md:flex'>
          {navigation.map(({ name, href }) => (
            <li>
              <a href={href}>
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>

        <a href='/#home'>
          <img src={logo} alt='Oscar Sancho' />
        </a>

        <ul className='flex'>
          {contactLinks.map(({ href, icon }) => (
            <li>
              <a href={href}>{icon}</a>
            </li>
          ))}
        </ul>
      </nav>

      {mobileMenuOpen && (
        <div onClick={toggleMobileMenu} onBlur={toggleMobileMenu}>
          <ul>
          {navigation.map(({ name, href, icon }) => (
            <li>
              <a href={href}>
                {icon}
                <span>{name}</span>
              </a>
            </li>
          ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Nav
