import React from 'react'
import { ContainerSingleProject, ContainerTechnologys, ContainerLinks, ContainerImageWeb, ContainerImagesApp } from './styles'
import Image from '../../components/image'
import { Boton } from '../../styles/GlobalStyles'
import { Html5, Css3, Javascript, IconReact, Next, Gatsby, Wordpress, Elementor } from '../../icons/tecnologias'

export default function SingleProject ({ pageContext }) {
  const { technologys } = pageContext
  return (
    <ContainerSingleProject>

      {(pageContext.img && !pageContext.img2) &&
        <ContainerImageWeb>
          <Image name={pageContext.img} />
        </ContainerImageWeb>}

      {(pageContext.img && pageContext.img2) &&
        <ContainerImagesApp>
          <Image name={pageContext.img} />
          <Image name={pageContext.img2} />
        </ContainerImagesApp>}

      <h3>Proyecto</h3>
      <h1>{pageContext.name}</h1>
      <p>{pageContext.description}</p>
      <ContainerTechnologys>
        <h2>Tecnologías usadas</h2>
        <ul>
          {technologys.map((icon, id) =>
            <li key={id}>
              {icon === 'Html5' &&
                <div>
                  <Html5 />
                  <p>HTML</p>
                </div>}
              {icon === 'Css3' &&
                <div>
                  <Css3 />
                  <p>CSS</p>
                </div>}
              {icon === 'Javascript' &&
                <div>
                  <Javascript />
                  <p>Javascript</p>
                </div>}
              {icon === 'React' &&
                <div>
                  <IconReact />
                  <p>React</p>
                </div>}
              {icon === 'Next' &&
                <div>
                  <Next />
                  <p>Next</p>
                </div>}
              {icon === 'Gatsby' &&
                <div>
                  <Gatsby />
                  <p>Gatsby</p>
                </div>}
              {icon === 'Wordpress' &&
                <div>
                  <Wordpress />
                  <p>Wordpress</p>
                </div>}
              {icon === 'Elementor' &&
                <div>
                  <Elementor />
                  <p>Elementor</p>
                </div>}
              {icon === 'React Native' &&
                <div>
                  <IconReact />
                  <p>React Native</p>
                </div>}
            </li>
          )}
        </ul>
      </ContainerTechnologys>
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
    </ContainerSingleProject>
  )
}
