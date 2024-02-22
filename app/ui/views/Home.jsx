import { robotoMono } from '../fonts'
import { MdWavingHand } from 'react-icons/md'
import Button from '../components/Button'
import { face } from '@/public/imgs'
import { contactLinks } from '@/public/imgs'
import Image from 'next/image'

const curriculum = 'Curriculum Vitae'
const imageSize = 350

const Home = () => {
  return (
    <section id='home' className='flex mt-[7rem] lg:mt-[9rem] justify-between items-center w-full'>
      <div className='mx-auto lg:mx-0'>
        <span className=' relative  flex gap-2  items-center text-xl'>
          Hola
          <span className='text-xl'>
            <MdWavingHand />
          </span>
          <span className='lg:hidden'>, soy</span>
        </span>

        <div>
          <div className='flex items-center gap-[1rem] mt-[1.3rem] mb-[1.5rem] static lg:relative right-[3.7rem]'>
            <span className='text-2xl hidden lg:inline'>Soy</span>
            <h1 className='text-6xl sm:text-7xl'>Óscar Sancho</h1>
          </div>

          <span
            className={`${robotoMono.className} text-secondary font-bold text-2xl sm:text-3xl `}
          >
            Full Stack Developer
          </span>

          <p className=' mb-[2rem] mt-[1.5rem] max-w-[41rem] text-pretty text-sm md:text-base'>
            Resido en Santiago de Chile y me enfoco la entrega de soluciones de
            alta calidad y valor.
            <br />
            Disfruto colaborando en equipos multidisciplinarios para alcanzar
            objetivos comunes y me fascina conectar con otros profesionales
            apasionados por el desarrollo de software.
            <br />
            Contáctame para desarrollar soluciones juntos.
          </p>

          <a
            target='_blank'
            href='https://drive.google.com/file/d/1f9EPuv6IzqY9B4Kw-AiI3Bj9ukwVh-a2/view?usp=sharing'
            className='text-sm  '
          >
            <Button word={curriculum}  />
          </a>
        </div>
      </div>

      <a
        target='_blank'
        href={contactLinks[0].href}
        className='rounded-full  bg-secondary border-secondary border-r-8 border-b-8 hidden lg:block' 
      >
        <Image
          src={face}
          alt="Óscar Sancho's face"
          width={imageSize}
          height={imageSize}
          className='rounded-full max-w-[20rem]'
        />
      </a>
    </section>
  )
}

export default Home
