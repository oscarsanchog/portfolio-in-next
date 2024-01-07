import Home from './ui/views/Home';
import Skills from './ui/views/Skills';
import Contact from './ui/views/Contact';
import Projects from './ui/views/Projects';

const page = () => {
  return (
    <>
      <Home/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  );
}

export default page