import React from 'react'
import { ContainerSingleProject, ContainerLinks, ContainerImageWeb } from './styles'
import Image from '../../components/image'
import { Boton } from '../../styles/GlobalStyles'
import { Tecnologias } from '../../components/Tecnologias'

export default function SingleProject ({ pageContext }) {
  const { technologys } = pageContext
  return (
    <ContainerSingleProject modoApp={pageContext.img2}>

      <ContainerImageWeb modoApp={pageContext.img2}>
        <Image name={pageContext.img2 ? pageContext.img2 : pageContext.img} />
      </ContainerImageWeb>

      <section>
        <h3>Proyecto</h3>
        <h1>{pageContext.name}</h1>
        <p>{pageContext.description}</p>

        <Tecnologias technologys={technologys} title='Tecnologías usadas' />

        <ContainerLinks>
          {pageContext.urlProject &&
            <a rel='noreferrer' href={pageContext.urlProject} target='_blank'>
              <Boton>Ir al proyecto</Boton>
            </a>}
          {pageContext.git &&
            <a rel='noreferrer' href={pageContext.git} target='_blank'>
              <Boton>Ir al repositorio</Boton>
            </a>}
        </ContainerLinks>
      </section>
    </ContainerSingleProject>
  )
}
