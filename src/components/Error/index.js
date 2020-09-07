import React from 'react'
import Image from '../image'
import { ContainerError } from './styles'
import { Boton } from '../../styles/GlobalStyles'
import { Link } from 'gatsby'

export const Error404 = () => {
  return (
    <ContainerError>
      <Image name='error.png' />
      <h1>Ha ocurrido un error</h1>
      <Link to='/'>
        <Boton>Volver al inicio</Boton>
      </Link>
    </ContainerError>
  )
}
