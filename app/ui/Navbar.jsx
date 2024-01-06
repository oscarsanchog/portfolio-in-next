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
    <header>
      <nav
        aria-hidden={mobileMenuOpen && 'true'}
        className='grid grid-cols-3 bg-background px-9 py-2 items-center shadow-2xl '
      >
        <button
          onClick={toggleMobileMenu}
          className='md:hidden text-primary hover:text-secondary transition-colors duration-300'
        >
          <IoMenu />
        </button>

        <ul className='hidden md:flex gap-3'>
          {navigation.map(({ name, href }) => (
            <li>
              <a
                href={href}
                className='text-primary hover:text-secondary hover:font-bold transition-colors duration-300 whitespace-nowrap'
              >
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <a href='/#home'>
          <img
            src={logo}
            alt='Oscar Sancho Logo'
            className='w-[4.5rem] rounded-full mx-auto'
          />
        </a>

        {/* Contacto */}
        <ul className='flex space-x-4 justify-end '>
          {contactLinks.map(({ href, icon }) => (
            <li>
              <a
                href={href}
                className='text-primary hover:text-secondary transition-colors duration-300'
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {mobileMenuOpen && (
        <nav
          onClick={toggleMobileMenu}
          onBlur={toggleMobileMenu}
          className={`fixed z-50 inset-y-0 left-0 w-64 transition-transform duration-300 transform bg-background  ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <ul className=''>
            {navigation.map(({ name, href, icon }) => (
              <li key={name}>
                <a
                  href={href}
                  className='flex items-center p-4 hover:bg-gray-200'
                >
                  {icon}
                  <span className='ml-2'>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Nav
