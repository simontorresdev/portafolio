import React from 'react'
import Image from '../image'
import { Formulario } from '../Formulario'
import { ContenedorContacto, Col1, Col2, Dato, CajaIcono, CajaRedes } from './styles'
import { RedesSociales } from '../RedesSociales'

export const MiContacto = () => {
  return (
    <ContenedorContacto>

      <Col1>

        <Image name='contact1.png' />

        <Dato>
          <CajaIcono href='mailto:job@simontorres.dev'>
            <div>
              <Image name='correo.png' />
            </div>
            <div>
              <h3>Correo</h3>
              <h2>job<span className='antiSpam'>antispan684654</span><code>&#64;</code><span className='antiSpam'>antispan446</span>simontorres.dev</h2>
            </div>
          </CajaIcono>
        </Dato>

        <CajaRedes>
          <RedesSociales />
        </CajaRedes>

      </Col1>

      <Col2>
        <h1>Contacto</h1>
        <h2>¡Hablemos!</h2>
        <Formulario />
      </Col2>

    </ContenedorContacto>
  )
}
