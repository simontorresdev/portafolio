import React from 'react'
import { StyledHeader, ContenedorRedes } from './styles'
import Navbar from '../Navbar'
import Instagram from '../../icons/IconInstagram'
import Linkedin from '../../icons/IconLinkedin'
import Github from '../../icons/IconGithub'
import { Logo } from '../Logo'
import { MenuResponsive } from '../MenuResponsive'

const Header = () => (
  <>
    <StyledHeader>

      <Logo />

      <Navbar />

      <ContenedorRedes>
        <li>
          <a href='https://github.com/SimonATC' target='_blanck'>
            <Github />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/sim%C3%B3n-torres-840815176/' target='_blanck'>
            <Linkedin />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/simontorresdev/' target='_blanck'>
            <Instagram />
          </a>
        </li>
      </ContenedorRedes>

    </StyledHeader>
    <MenuResponsive />
  </>
)

export default Header
