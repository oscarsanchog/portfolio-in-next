import { IoMdPerson } from 'react-icons/io'
import { MdBusinessCenter, MdOutlineComputer, MdEmail } from 'react-icons/md'

const navigation = [
  { name: 'Sobre mí', href: '/#home', icon: <IoMdPerson /> },
  { name: 'Proyectos', href: '/#projects', icon: <MdBusinessCenter /> },
  { name: 'Skills', href: '/#skills', icon: <MdOutlineComputer /> },
  { name: '/contacto', href: '/#contact', icon: <MdEmail /> },
]

const nav = () => {
  return <div>nav</div>
}
export default nav
