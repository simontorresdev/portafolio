import React from 'react'
import Instagram from '../../icons/IconInstagram'
import Linkedin from '../../icons/IconLinkedin'
import Github from '../../icons/IconGithub'
import { ContenedorRedes } from './styles'

export const RedesSociales = () => {
  return (
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
        <a href='https://github.com/simontorresdev/' target='_blanck'>
          <Instagram />
        </a>
      </li>
    </ContenedorRedes>
  )
}
