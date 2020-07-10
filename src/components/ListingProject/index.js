import React from 'react'
import Image from '../image'
import { ContenedorListing, ContenedorImagen, ContenedorDescripcion } from './styles'

export const ListingProject = () => {
  return (
    <ContenedorListing>
      <ContenedorImagen>
        <Image name='top.jpg' />
      </ContenedorImagen>
      <ContenedorDescripcion>
        <h2>Nombre del proyecto</h2>
        <h3>Proyecto realizado con Next JS</h3>
      </ContenedorDescripcion>
    </ContenedorListing>
  )
}
