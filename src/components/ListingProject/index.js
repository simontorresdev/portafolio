import React from 'react'
import Image from '../image'
import { ContenedorListing, ContenedorImagen, ContenedorDescripcion } from './styles'
import { Link } from 'gatsby'
import { Html5, Css3, Javascript, IconReact, Next, Gatsby, Wordpress, Elementor } from '../../icons/tecnologias'

export const ListingProject = ({ nombre, excerpt, icons, img, url }) => {
  return (
    <ContenedorListing>
      <Link to={`/${url}`}>
        <ContenedorImagen>
          <Image name={img} />
          <section>
            <div>
              <ul>
                {icons.map((icon, id) =>
                  <li key={id}>
                    {icon === 'Html5' &&
                      <Html5 />}
                    {icon === 'Css3' &&
                      <Css3 />}
                    {icon === 'Javascript' &&
                      <Javascript />}
                    {(icon === 'React' || icon === 'React Native') &&
                      <IconReact />}
                    {icon === 'Next' &&
                      <Next />}
                    {icon === 'Gatsby' &&
                      <Gatsby />}
                    {icon === 'Wordpress' &&
                      <Wordpress />}
                    {icon === 'Elementor' &&
                      <Elementor />}
                  </li>
                )}
              </ul>
            </div>
          </section>
        </ContenedorImagen>
        <ContenedorDescripcion>
          <h2>{nombre}</h2>
          <h3>{excerpt}</h3>
        </ContenedorDescripcion>
      </Link>
    </ContenedorListing>
  )
}
