'use client'

import { IoMdPerson } from 'react-icons/io'
import { MdBusinessCenter, MdOutlineComputer, MdEmail } from 'react-icons/md'
import { IoMenu } from 'react-icons/io5'

import { useState } from 'react'

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

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <nav>
      {/* Sandwich button */}
      <div
        aria-hidden={mobileMenuOpen && 'true'}
        className='grid grid-cols-3 bg-background px-10 py-6 items-center shadow-2xl '
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
                className='text-primary hover:text-secondary hover:font-bold transition-colors duration-300 whitespace-nowrap'
              >
                <span className={robotoMono.className}>{name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <a href='/#home'>
          <Image
            src={logo}
            alt="Óscar Sancho's logo"
            className='mx-auto'
            width={59.2}
            height={59.2}
          />
        </a>

        {/* Contact */}
        <ul className='flex space-x-7 justify-end '>
          {contactLinks.map(({ href, icon }) => (
            <li key={href}>
              <a
                target={href === '/#contact' ? '_self' : '_blank'}
                href={href}
                className='text-primary hover:text-secondary transition-colors duration-300'
              >
                <span className='text-xl'>{icon}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú desplegable */}
      <div
        onClick={toggleMobileMenu}
        className={`${
          !mobileMenuOpen && 'hidden'
        } bg-gray-600/50 top-0 min-h-screen w-full fixed backdrop-blur-sm`}
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
