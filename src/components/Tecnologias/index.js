import React from 'react'
import { ContainerTechnologys } from './styles'
import { Html5, Css3, Javascript, IconReact, Next, Gatsby, Wordpress, Elementor, Firebase } from '../../icons/tecnologias'
import Github from '../../icons/IconGithub'

export const Tecnologias = ({ technologys, title }) => {
  return (
    <ContainerTechnologys>
      {title &&
        <h2>{title}</h2>}
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
            {icon === 'Firebase' &&
              <div>
                <Firebase />
                <p>Firebase</p>
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
            {icon === 'Github' &&
              <div>
                <Github />
                <p>Github</p>
              </div>}
          </li>
        )}
      </ul>
    </ContainerTechnologys>
  )
}
