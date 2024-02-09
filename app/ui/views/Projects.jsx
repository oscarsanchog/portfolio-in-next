import { projects } from "@/app/lib/data"

const Projects = () => {
  return (
    <section className="mt-[4rem]">
      <h2 className="text-4xl">Proyectos</h2>
      <div>{projects[0].technologies[0].icon}</div>
    </section>
  )
}
export default Projects