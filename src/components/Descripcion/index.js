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
        <p>Me encanta pensar el impacto que tiene la tecnología en la vida de las personas, es increíble hacer parte de eso, siempre estoy en busca de retos profesionales, me gusta adquirir experiencia en proyectos a gran escala y posibilidades de mucho crecimiento.</p>
        <p>Soy una persona autodidacta, me encanta el lema de Platzi “nunca pares de aprender”, día a día dedico tiempo para aprender nuevas habilidades que me ayuden a mejorar como profesional, me encanta lo que hago y es por eso que siempre quiero ir a por más.</p>
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
