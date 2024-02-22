'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

const MainProject = ({
  name,
  description,
  year,
  image,
  link,
  repository,
  technologies,
  position,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false)

  const cardImage = () => (
    <a href={link} target='_blank'>
      <Image
        src={image}
        alt={name}
        className='object-cover w-[33rem] h-[25rem]'
        width={640}
        height={400}
      />
    </a>
  )

  const cardContent = () => (
    <div className='m-auto flex flex-col gap-3'>
      <a href={link} target='_blank'>
        <h3 className='text-2xl text-secondary font-semibold hover:text-primary hover:font-bold transition-all duration-300'>{name}</h3>
      </a>

      <p className='italic font-bold text-center text-xs text-tertiary'>{year}</p>

      {repository && (
        <a href={repository} target='_blank' className='m-auto'>
          <FaGithub  className='hover:text-tertiary text-lg transition duration-300'/>
        </a>
      )}

      <p className='max-w-[20rem] max-h-[12rem] overflow-auto text-pretty text-left text-sm md:mx-[2rem]'>
        {showFullDescription ? description : `${description.slice(0, 73)}...`}
      </p>

      <button
        className='m-auto block font-semibold text-secondary  text-sm hover:text-primary hover:font-bold transition-all duration-300'
        onClick={() => setShowFullDescription(!showFullDescription)}
      >
        {showFullDescription ? 'Ver menos' : 'Ver más'}
      </button>
    </div>
  )

  return (
    <div className='bg-secondarybg rounded-xl shadow-xl overflow-hidden transition duration-200 hover:scale-105 mb-[4rem] hidden md:block'>
      <div className='flex justify-start text-center'>
        {position % 2 === 0 ? (
          <>
            {cardImage()}
            {cardContent()}
          </>
        ) : (
          <>
            {cardContent()}
            {cardImage()}
          </>
        )}
      </div>
    </div>
  )
}
export default MainProject
