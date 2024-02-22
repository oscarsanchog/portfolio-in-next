'use client'

import { projects } from '@/app/lib/data'
import MainProject from '../components/MainProject'
import { useState } from 'react'
import Project from '../components/Project'
import Button from '../components/Button'
import { robotoMono } from '../fonts'

const Projects = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false)
  const less = 'Ver menos'
  const more = 'Mostrar más proyectos'

  const mainProjects = projects.filter(
    (project) =>
      project.name === 'Mōru App' || project.name === 'Driver Race Finder'
  )

  const moreProjects = projects.filter(
    (project) =>
      project.name !== 'Mōru App' && project.name !== 'Driver Race Finder'
  )

  return (
    <section id='projects' className='mt-[6rem] lg:mt-[9rem] w-full '>
      <h2 className={`${robotoMono.className} antialiased text-5xl mb-[3rem]`}>
        Proyectos
      </h2>

      {mainProjects.map(
        (
          { name, description, year, image, link, repository, technologies },
          index
        ) => (
          <MainProject
            key={name}
            name={name}
            description={description}
            year={year}
            image={image}
            link={link}
            repository={repository}
            technologies={technologies}
            position={index}
          />
        )
      )}

      <section className='md:hidden'>
        {mainProjects.map(
          ({
            name,
            description,
            year,
            image,
            link,
            repository,
            technologies,
          }) => (
            <Project
              key={name}
              name={name}
              description={description}
              year={year}
              image={image}
              link={link}
              repository={repository}
              technologies={technologies}
            />
          )
        )}
      </section>

      {showMoreProjects && (
        <section className='flex justify-center gap-[5.9rem]'>
          {moreProjects.map(
            ({
              name,
              description,
              year,
              image,
              link,
              repository,
              technologies,
            }) => (
              <Project
                key={name}
                name={name}
                description={description}
                year={year}
                image={image}
                link={link}
                repository={repository}
                technologies={technologies}
              />
            )
          )}
        </section>
      )}

      <button
        className='m-auto block '
        onClick={() => setShowMoreProjects(!showMoreProjects)}
      >
        <Button word={showMoreProjects ? less : more} />
      </button>
    </section>
  )
}
export default Projects
