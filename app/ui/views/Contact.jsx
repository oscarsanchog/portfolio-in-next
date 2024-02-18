import { FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
//import { robotoMono } from '../fonts'
import { robotoMono } from '@/app/ui/fonts'

const Contact = () => {
  const iconChars = {
    size: 80,
    color: 'text-primary',
    transition:
      'transition-all duration-300 hover:font-bold hover:text-secondary hover:size-[6rem]',
  }

  const contactIcons = [
    {
      name: 'Email',
      icon: (
        <MdEmail
          size={iconChars.size}
          className={`${iconChars.color} ${iconChars.transition}`}
        />
      ),
      link: 'mailto:oscar.sancho.gonzalez@gmail.com',
    },
    {
      name: 'WhatsApp',
      icon: (
        <FaWhatsapp
          size={iconChars.size}
          className={`${iconChars.color} ${iconChars.transition}`}
        />
      ),
      link: 'https://wa.me/qr/QMCPQCFJUCOAN1',
    },
    {
      name: 'LinkedIn',
      icon: (
        <FaLinkedin
          size={iconChars.size}
          className={`${iconChars.color} ${iconChars.transition}`}
        />
      ),
      link: 'https://www.linkedin.com/in/oscarsanchog/',
    },
  ]


  return (
    <section id='contact' className='mt-[13rem] flex flex-col justify-center items-center gap-[4rem] border-t border-b max-w-screen-xl py-[6rem]'>
      {/* <h2 className='text-5xl mb-[2.5rem]'>Contáctame</h2> */}

        <h2 className={`${robotoMono.className} antialiased text-[3rem] text-secondary `}>
          Contáctame aquí:
        </h2>

        <ul className='flex items-center m-auto gap-36  '>
          {contactIcons.map(({ name, icon, link }, index) => (
            <li title={name} key={index}>
              <a target='_blank' href={link}>
                {icon}
              </a>
            </li>
          ))}
        </ul>
    </section>
  )
}
export default Contact
