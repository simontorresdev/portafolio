import React from 'react'
import Image from '../image'
import { Formulario } from '../Formulario'
import { ContenedorContacto, Col1, Col2, Dato, CajaIcono } from './styles'

export const MiContacto = () => {
  return (
    <ContenedorContacto>

      <Col1>
        <Image name='contact1.png' />

        <Dato>
          <CajaIcono href='mailto:simontorres979797@gmail.com'>
            <div>
              <Image name='correo.png' />
            </div>
            <div>
              <h3>Correo</h3>
              <h2>simontorres979797@gmail.com</h2>
            </div>
          </CajaIcono>
          <CajaIcono href='tel:573015254496'>
            <div>
              <Image name='telefono.png' />
            </div>
            <div>
              <h3>Teléfono</h3>
              <h2>301 5254496</h2>
            </div>
          </CajaIcono>
        </Dato>

      </Col1>

      <Col2>
        <h1>Contacto</h1>
        <h2>¡Hablemos!</h2>
        <Formulario />
      </Col2>

    </ContenedorContacto>
  )
}
