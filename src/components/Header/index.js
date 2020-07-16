import React from 'react'
import { StyledHeader, ContenedorLogo, ContenedorRedes } from './styles'
import { Link } from 'gatsby'
import Image from '../image'
import Navbar from '../Navbar'
import Instagram from '../../icons/IconInstagram'
import Linkedin from '../../icons/IconLinkedin'
import Github from '../../icons/IconGithub'

const Header = () => (
  <StyledHeader>

    <ContenedorLogo>
      <Link to='/'>
        {/* <Image name='logo.png' /> */}
      </Link>
    </ContenedorLogo>

    <Navbar />

    <ContenedorRedes>
      <li>
        <a href='https://github.com/SimonATC' target='_blanck'>
          <Github />
        </a>
      </li>
      <li>
        <a href='https://github.com/SimonATC' target='_blanck'>
          <Linkedin />
        </a>
      </li>
      <li>
        <a href='https://github.com/SimonATC' target='_blanck'>
          <Instagram />
        </a>
      </li>
    </ContenedorRedes>

  </StyledHeader>
)

export default Header
