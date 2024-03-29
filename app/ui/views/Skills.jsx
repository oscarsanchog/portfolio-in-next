'use client'

import { technologies } from '@/app/lib/data'
import { useState } from 'react'
import { robotoMono } from '../fonts'

const Skills = () => {
  const [openProjects, setOpenProjects] = useState(false)
  const [projectName, setProjectName] = useState('')

  /* const handleOnBlur = () => {
    setTimeout(() => {
      setOpenProjects(false)
    }, 220)
  } */

  const technology = (name, icon, projects) => (
    <div key={name} className='relative m-[.8rem] lg:m-[2rem]'>
      {openProjects && projectName === name && (
        <ul className='text-center w-[10rem] py-[.5rem] absolute bottom-[5rem] left-[-3rem] bg-secondary rounded-3xl '>
          <h3 className='font-bold text-md'>{name}</h3>
          {projects?.map(({ name, link }) => (
            <li
              key={name}
              className='my-2 hover:font-bold hover:text-black transition-all duration-300'
            >
              <a
                className='text-sm'
                href={link}
                target={link === '/#home' ? '_top' : '_blank'}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => {
          setOpenProjects(!openProjects)
          setProjectName(name)
        }}
        onBlur={() => {
          setTimeout(() => {
            setOpenProjects(false)
          }, 230)
        }}
        className='text-[3rem] md:text-[3.6rem] hover:scale-125 hover:text-secondary transition duration-300 '
      >
        {icon}
      </button>
    </div>
  )

  return (
    <section id='skills' className='mt-[6rem] lg:mt-[9rem] w-full'>
      <h2 className={`${robotoMono.className} antialiased text-5xl mb-[3rem]`}>
        Tech Skills
      </h2>

      <div className='h-auto flex justify-center flex-wrap'>
        {technologies.map(({ name, icon, projects }) =>
          technology(name, icon, projects)
        )}
      </div>
    </section>
  )
}

export default Skills
