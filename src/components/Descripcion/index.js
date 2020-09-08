import React from 'react'
import { Link } from 'gatsby'
import { ContainerDescripcion, ColExt, ColCen, ContenedorImagen } from './styles'
import Image from '../image'
import { Boton } from '../../styles/GlobalStyles'
import Instagram from '../../icons/IconInstagram'
import Linkedin from '../../icons/IconLinkedin'
import Github from '../../icons/IconGithub'
import { Tecnologias } from '../Tecnologias'

export const Descripcion = () => {
  return (
    <ContainerDescripcion>

      <ColExt>
        <h3>Intereses</h3>
        <p>Soy un apasionado de la tecnología, enfocado en el desarrollo de aplicaciones especialmente con Javacript y su librería React . Siempre estoy en busca de retos profesionales, me gusta adquirir experiencia en proyectos a gran escala y posibilidades de mucho crecimiento.</p>
        <p>Soy una persona autodidacta, día a día dedico tiempo para aprender en diferentes plataformas digitales como Platzi, Udemy, Youtube, documentación… en fin, cualquier plataforma que me pueda aportar conocimiento para crecer profesionalmente</p>
      </ColExt>

      <ColExt>
        <h3>Tecnologías</h3>
        <Tecnologias technologys={['Html5', 'Css3', 'Javascript', 'React', 'Gatsby', 'Next', 'Github', 'React Native', 'Wordpress', 'Elementor']} />
      </ColExt>

      <ColCen>
        <ContenedorImagen>
          <Image name='simontorres1.jpg' />
          <section>
            <div>
              <nav>
                <li>
                  <a href='https://github.com/simontorresdev' target='_blanck'>
                    <Github />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/simontorresdev/' target='_blanck'>
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/simontorresdev/' target='_blanck'>
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
