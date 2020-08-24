import React from 'react'
import Image from '../image'
import { ContenedorListing, ContenedorImagen, ContenedorDescripcion } from './styles'

export const ListingProject = ({ nombre, descripcion, icons, img }) => {
  return (
    <ContenedorListing>
      <ContenedorImagen>
        <Image name={img} />
        <section>
          <div>
            <nav>
              {icons.map((icon, id) =>
                <li key={id}>
                  {icon}
                </li>
              )}
            </nav>
          </div>
        </section>
      </ContenedorImagen>
      <ContenedorDescripcion>
        <h2>{nombre}</h2>
        <h3>{descripcion}</h3>
      </ContenedorDescripcion>
    </ContenedorListing>
  )
}
