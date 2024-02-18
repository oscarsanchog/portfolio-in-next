import Home from './ui/views/Home'
import Skills from './ui/views/Skills'
import Contact from './ui/views/Contact'
import Projects from './ui/views/Projects'
import Footer from './ui/views/Footer'
import NavBar from '@/app/ui/views/NavBar'

const page = () => {
  return (
    <>
      <header >
        <NavBar />
      </header>

      <main className='2xl:mx-[15rem] lg:mx-[7rem]'>
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default page
