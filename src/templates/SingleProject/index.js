import React from 'react'
import { ContainerSingleProject, ContainerTechnologys } from './styles'
import Image from '../../components/image'
import { Boton } from '../../styles/GlobalStyles'
import { Html5, Css3, Javascript, IconReact, Gatsby } from '../../icons/tecnologias'

export default function SingleProject ({ pageContext }) {
  console.log(pageContext)
  return (
    <ContainerSingleProject>
      <Image name={pageContext.img} />
      <h3>Proyecto</h3>
      <h1>{pageContext.name}</h1>
      <p>{pageContext.description}</p>
      <ContainerTechnologys>
        <h2>Tecnologías usadas</h2>
        <ul>
          <li><Html5 /></li>
          <li><Css3 /></li>
          <li><Javascript /></li>
          <li><IconReact /></li>
          <li><Gatsby /></li>
        </ul>
      </ContainerTechnologys>
      <a rel='noreferrer' href={pageContext.urlProject} target='_blank'>
        <Boton>Ir al proyecto</Boton>
      </a>
    </ContainerSingleProject>
  )
}
