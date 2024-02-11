import { technologies } from '@/app/lib/data'
import Skill from '../components/Skill'

const Skills = () => {
  return (
    <section id='skills' className='mt-[5rem]'>
      <h2 className='text-5xl mb-[3rem]'>Tech Skills</h2>

      <div className='w-full h-auto mx-auto overflow-hidden text-details'>
        <div className='slider-track animate-slide flex'>
          {technologies.map(({ name, icon }) => (
            <Skill key={name} name={name} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skills
