import Home from './ui/views/Home'
import Skills from './ui/views/Skills'
import Contact from './ui/views/Contact'
import Projects from './ui/views/Projects'
import Footer from './ui/views/Footer'
import NavBar from '@/app/ui/views/NavBar'

const page = () => {
  return (
    <div className=''>
      <header>
        <NavBar />
      </header>
      <main className='mx-[2rem]  sm:mx-[7rem]  xl:mx-[14rem] flex flex-1 flex-col items-center  '>
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>

      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi odio
        quis ratione nesciunt fuga dolor eos quo eveniet, architecto consequatur
        illum aspernatur, necessitatibus modi sed nemo soluta! Officiis, placeat
        tenetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Reprehenderit iure accusamus corporis iusto recusandae? Facilis sed
        laboriosam similique doloribus nihil! Blanditiis ratione libero incidunt
        voluptatum suscipit? Error perspiciatis laborum illum.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi odio
        quis ratione nesciunt fuga dolor eos quo eveniet, architecto consequatur
        illum aspernatur, necessitatibus modi sed nemo soluta! Officiis, placeat
        tenetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Reprehenderit iure accusamus corporis iusto recusandae? Facilis sed
        laboriosam similique doloribus nihil! Blanditiis ratione libero incidunt
        voluptatum suscipit? Error perspiciatis laborum illum.
      </div>
    </div>
  )
}

export default page
