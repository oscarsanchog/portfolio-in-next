import Home from './ui/views/Home';
import Skills from './ui/views/Skills';
import Contact from './ui/views/Contact';
import Projects from './ui/views/Projects';

const page = () => {
  return (
    <>
    <main className='2xl:mx-[15rem] lg:mx-[7rem]'>
      <Home/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
    </>
  );
}

export default page