import { FaHandshakeSimple } from 'react-icons/fa6'
import { robotoMono } from '../fonts'
import { MdWavingHand } from 'react-icons/md'
import Button from '../components/Button'
import { face } from '@/public/imgs'
import { contactLinks } from '@/public/imgs'
import Image from 'next/image'

const Home = () => {
  const curriculum = 'Curriculum Vitae'

  return (
    <section id='home' className='flex mt-[4rem] justify-between'>
      <div>
        <span className=' flex gap-2 items-center text-2xl'>
          Hola
          <span className=' text-xl '>
            <MdWavingHand />
          </span>
        </span>

        <div>
          <div className='flex items-center gap-[1rem] my-[2rem] ml-[2rem]'>
            <span className='text-3xl'>Soy</span>
            <h1 className='text-8xl'>Óscar Sancho</h1>
          </div>

          <span
            className={`${robotoMono.className} text-secondary font-bold text-4xl ml-[2rem]`}
          >
            Full Stack Developer
          </span>

          <p className='ml-[2rem] my-[2rem] max-w-2xl text-pretty'>
            Resido en Santiago de Chile y me enfoco la entrega de soluciones de
            alta calidad y valor.<br />
            Disfruto colaborando en equipos multidisciplinarios para alcanzar
            objetivos comunes y me fascina conectar con otros profesionales
            apasionados por el desarrollo de software.<br />
            Contáctame para crear juntos.
          </p>

          <a
            target='_blank'
            href='https://drive.google.com/file/d/1f9EPuv6IzqY9B4Kw-AiI3Bj9ukwVh-a2/view?usp=sharing'
            className='ml-[2rem]'
          >
            <Button word={curriculum} />
          </a>
        </div>
      </div>

      <div className='my-auto'>
        <a target='_blank' href={contactLinks[0].href} >
          <Image
            src={face}
            alt="Óscar Sancho's face"
            width={400}
            height={400}
            className='rounded-full'
          />
        </a>
      </div>
    </section>
  )
}
export default Home
