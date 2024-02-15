'use client'

import { technologies } from '@/app/lib/data'
import { useState } from 'react'

const Skills = () => {
  const [openProjects, setOpenProjects] = useState(false)
  const [projectName, setProjectName] = useState('')

  const technology = (name, icon, projects) => (
    <div className='relative' onfo >
      {openProjects && projectName === name && (
        <ul className='text-center w-[10rem] py-[.5rem] absolute bottom-[5rem] left-[-3rem] bg-secondary rounded-3xl ' >
          <h3 className='font-bold text-lg'>{name}</h3>
          {projects?.map(({ name, link }) => (
            <li className='my-2 hover:font-bold hover:text-black transition-all duration-300'>
              <a href={link} target={link === '/#home' ? '_top' : '_blank'} >
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
          }, 100 )
        }}
        key={name}
        className='hover:scale-125 hover:text-secondary transition duration-300'
      >
        
        {icon}
      </button>
    </div>
  )

  return (
    <section id='skills' className='mt-[4rem]'>
      <h2 className=' text-5xl mb-[3rem]'>Tech Skills</h2>

      

      <div className='h-auto mb-[3rem]  flex justify-evenly' >
        {technologies
          .slice(0, 8)
          .map(({ name, icon, projects }) => technology(name, icon, projects))}
      </div>

      <div className='h-auto mx-auto flex justify-between'>
        {technologies
          .slice(-8)
          .map(({ name, icon, projects }) => technology(name, icon, projects))}
      </div>
    </section>
  )
}
export default Skills
