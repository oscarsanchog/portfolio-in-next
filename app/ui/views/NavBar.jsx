'use client'

import { IoMdPerson } from 'react-icons/io'
import { MdBusinessCenter, MdOutlineComputer, MdEmail } from 'react-icons/md'
import { IoMenu } from 'react-icons/io5'

import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { logo } from '@/public/imgs'
import { robotoMono } from '../fonts'
import { contactLinks } from '@/public/imgs'
import Image from 'next/image'

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

const sizeLogo = 53

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const notify = () =>
    window.alert(
      'El email "oscar.sancho.gonzalez@gmail.com" ha sido copiado con éxito.'
    )

  return (
    <nav className='fixed top-0 right-0 left-0 z-40'>
      {/* Sandwich button */}
      <div
        aria-hidden={mobileMenuOpen && 'true'}
        className='  grid grid-cols-3 bg-background px-10 py-6 items-center shadow-2xl '
      >
        <button
          onClick={toggleMobileMenu}
          className='lg:hidden text-primary hover:text-secondary transition-colors duration-300 z-20'
        >
          <IoMenu />
        </button>

        {/* Nav Links */}
        <ul className='hidden lg:flex gap-7'>
          {navigation.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className={`${robotoMono.className} text-sm text-primary hover:text-secondary hover:font-bold transition-all duration-300 whitespace-nowrap`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <a href='/#home'>
          <Image
            src={logo}
            alt="Óscar Sancho's logo"
            className='mx-auto transition-all duration-300 hover:w-[3.5rem]'
            width={sizeLogo}
            height={sizeLogo}
          />
        </a>

        {/* Contact */}
        <ul className='flex space-x-7 justify-end '>
          {contactLinks.map(({ href, icon }) => (
            <li key={href}>
              {href.includes('@gmail.com') ? (
                <CopyToClipboard text={'oscar.sancho.gonzalez@gmail.com'}>
                  <button
                    onClick={notify}
                    className='text-lg text-primary hover:text-secondary transition-colors duration-300'
                  >
                    {icon}
                  </button>
                </CopyToClipboard>
              ) : (
                <a
                  target='_blank'
                  href={href}
                  className='text-lg text-primary hover:text-secondary transition-colors duration-300'
                >
                  {icon}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Menú desplegable */}
      <div
        onClick={toggleMobileMenu}
        className={`${
          !mobileMenuOpen && 'hidden'
        } bg-gray-600/50 top-0 min-h-screen w-full  backdrop-blur-sm `}
      />

      <div
        onClick={toggleMobileMenu}
        className={`${
          mobileMenuOpen ? 'w-72' : 'w-0'
        } z-10 fixed bg-background rounded-tr-xl rounded-br-xl min-h-screen top-0 transition-all duration-300`}
      >
        <ul
          className={`${
            !mobileMenuOpen && 'hidden'
          } mt-[6rem] ml-[2.2rem] flex flex-col gap-10`}
        >
          {navigation.map(({ name, href, icon }) => (
            <li key={name}>
              <a
                href={href}
                className='flex items-center gap-5 text-primary hover:text-secondary hover:font-bold transition-colors duration-300 whitespace-nowrap'
                onClick={toggleMobileMenu}
              >
                <span className='text-xl'>{icon}</span>
                <span className={robotoMono.className}>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
