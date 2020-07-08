import React from 'react'
import Image from '../image'
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

export const Presentación = () => (
  <ContenedorPresentacion>
    <Columna1>
      <Image name='fondoHome.png' />
    </Columna1>
    <Column2>
      <PresentacionTop>
        <PresentacionCol1>
          <h3>Sobre mí</h3>
          <h2>Hola, soy <br /> Simón Torres</h2>
          <h1>Frontend Developer</h1>
        </PresentacionCol1>
        <PresentacionCol2>
          <h3>tech</h3>
        </PresentacionCol2>
      </PresentacionTop>
      <PresentacionBottom>
        <PresentacionCol3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula arcu quis odio rutrum pretium. Ut tempor nunc vel suscipit varius. Maecenas aliquam, lectus vel tristique rutrum, massa mauris vestibulum nulla, vel tempor mi ligula feugiat ipsum. Nam sed sapien cursus, tristique nulla a, bibendum mi. Quisque tristique, dui ut dictum ultricies, velit enim volutpat ipsum, sit amet ultrices nibh erat sit amet elit. Sed placerat est vitae pulvinar ornare. Vivamus consequat elit vel magna tempor placerat. Vivamus lacinia nisi non nibh condimentum, eu imperdiet felis bibendum. Sed auctor in erat in rutrum. Mauris congue laoreet convallis. </p>
        </PresentacionCol3>
      </PresentacionBottom>
    </Column2>
  </ContenedorPresentacion>
)
