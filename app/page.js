import Home from './ui/views/Home'
import Skills from './ui/views/Skills'
import Contact from './ui/views/Contact'
import Projects from './ui/views/Projects'
import Footer from './ui/views/Footer'
import NavBar from '@/app/ui/views/NavBar'

const page = () => {
  return (
    <div className=''>
      <header >
        <NavBar />
      </header>

      <main className='mx-[2rem]  sm:mx-[7rem]  xl:mx-[14rem] flex flex-1 flex-col items-center  '>
        <Home />
        <Projects />
        {/* <Skills /> */}
        {/* <Contact /> */}
      </main>

      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  )
}

export default page
