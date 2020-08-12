import React from 'react'
import { Menu } from './styles'
import { Link } from 'gatsby'
import IconHome from '../../icons/IconHome'
import IconAbout from '../../icons/IconAbout'
import IconProjects from '../../icons/IconProjects'
import IconContact from '../../icons/IconContact'

const Navbar = () => (
  <Menu>
    <li>
      <Link to='/' activeClassName='active'>
        <IconHome />
        <span>Inicio</span>
      </Link>
    </li>
    <li>
      <Link to='/sobre-mi' activeClassName='active'>
        <IconAbout />
        <span>Sobre mí</span>
      </Link>
    </li>
    <li>
      <Link to='/proyectos' activeClassName='active'>
        <IconProjects />
        <span>Proyectos</span>
      </Link>
    </li>
    <li>
      <Link to='/contacto' activeClassName='active'>
        <IconContact />
        <span>Contacto</span>
      </Link>
    </li>
  </Menu>
)

export default Navbar
