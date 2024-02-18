'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

const Project = ({
  name,
  description,
  year,
  image,
  link,
  repository,
  technologies,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false)

  return (
    <div className='max-w-[20rem] h-[33rem] bg-secondarybg rounded-xl shadow-xl overflow-hidden transition duration-200 hover:scale-105 mb-[4rem]'>
      <div className='flex flex-col'>
        <a href={link} target='_blank'>
          <Image
            src={image}
            alt={name}
            className='object-cover h-[17rem] mb-[1.5rem]'
            width={640}
            height={400}
          />
        </a>

        <div className='m-auto flex flex-col gap-3'>
          <a href={link} target='_blank'>
            <h3 className='text-center text-2xl text-secondary font-semibold hover:text-primary hover:font-bold transition-all duration-300'>
              {name}
            </h3>
          </a>

          {repository ? (
            <a href={repository} target='_blank' className='m-auto'>
              <FaGithub className=' hover:text-tertiary transition duration-300' />
            </a>
          ) : (
            <p className='italic font-bold text-center text-xs text-tertiary'>
              {year}
            </p>
          )}

          <p className='max-w-[16rem] max-h-[6rem] overflow-auto text-pretty text-sm text-left'>
            {showFullDescription
              ? description
              : `${description.slice(0, 73)} ...`}
          </p>

          <button
            className='m-auto block text-sm font-semibold text-secondary hover:text-primary hover:font-bold transition-all duration-300'
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      </div>
    </div>
  )
}
export default Project
