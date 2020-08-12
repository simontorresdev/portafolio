import React from 'react'
import Image from '../image'
import { Boton } from '../../styles/GlobalStyles'
import { Link } from 'gatsby'
import {
  ContenedorPresentacion,
  Columna1,
  Column2,
  PresentacionTop,
  PresentacionCol1,
  PresentacionCol2,
  PresentacionBottom,
  PresentacionCol3
} from './styles'

export const Presentación = ({ boton, imagen }) => (
  <ContenedorPresentacion>
    <Columna1>
      <Image name={imagen} />
    </Columna1>
    <Column2>
      <PresentacionTop>
        <PresentacionCol1>
          <h3>Sobre mí</h3>
          <h2>Hola, soy <br /> Simón Torres</h2>
          <h1>Frontend Developer</h1>
        </PresentacionCol1>
        <PresentacionCol2 />
      </PresentacionTop>
      <PresentacionBottom>
        <PresentacionCol3>
          <p>
            Soy un desarrollador web. Venezolano, pero actualmente viviendo en Colombia. Puedes encontrarme en las principales
            redes sociales como @SimonTorresDev. Me dedico al desarrollo de aplicaciones web y móviles.
          </p>
          {boton &&
            <Link to='/sobre-mi'>
              <Boton>Ver más</Boton>
            </Link>}
        </PresentacionCol3>
      </PresentacionBottom>
    </Column2>
  </ContenedorPresentacion>
)
