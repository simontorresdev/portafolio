import React from 'react'
import { Link } from 'gatsby'
import { ContainerDescripcion, ColExt, ColCen, ContenedorImagen } from './styles'
import Image from '../image'
import { Boton } from '../../styles/GlobalStyles'
import Instagram from '../../icons/IconInstagram'
import Linkedin from '../../icons/IconLinkedin'
import Github from '../../icons/IconGithub'

export const Descripcion = () => {
  return (
    <ContainerDescripcion>

      <ColExt>
        <h3>Intereses</h3>
        <p>Soy un apasionado de la tecnología, me enfoco principalmente en el desarrollo de aplicaciones web y desarrollo de aplicaciones móviles. Actualmente estoy enfocado principalmente en javascript y el desarrollo de aplicaciones con React JS.</p>
        <h3>Objetivos</h3>
        <p>Siempre estoy  en busca de retos profesionales, me gusta adquirir experiencia en proyectos a gran escala y posibilidades de mucho crecimiento.</p>
      </ColExt>

      <ColExt>
        <h3>Aprendizaje</h3>
        <p>Me considero una persona autodidacta, día a día dedico tiempo para aprender y así ser un mejor profesional. Hoy en día tenemos acceso a mucha educación de calidad al alcance de la mano gracias a la tecnología, aprendo de plataformas como Platzi, Udemy, Youtube, EDteam y por supuesto también de la documentación.</p>
        <h3>Tecnologías</h3>
        <p>Algunas de las tecnologías que domino son: HTML5, CSS3, Javascript, Github, React Js, React Native, Next Js, Gatsby Js.</p>
      </ColExt>

      <ColCen>
        <ContenedorImagen>
          <Image name='simontorres.jpg' />
          <section>
            <div>
              <nav>
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
              </nav>
            </div>
          </section>
        </ContenedorImagen>
        <Link to='/contacto'>
          <Boton>Contáctame</Boton>
        </Link>
      </ColCen>

    </ContainerDescripcion>
  )
}
