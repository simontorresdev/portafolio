import React from 'react'
import { ContenedorProyectos, GridProjects } from './styles'
import { ListingProject } from '../ListingProject'
import HTML5 from '../../icons/tecnologias/Html5'
import CSS3 from '../../icons/tecnologias/Css3'
import Javascript from '../../icons/tecnologias/Javascript'
import ReactIcon from '../../icons/tecnologias/React'
import Gatsby from '../../icons/tecnologias/Gatsby'

export const Proyectos = () => {
  return (
    <ContenedorProyectos>
      <h2>Proyectos</h2>
      <GridProjects>
        {[1, 2, 3, 4].map(id =>
          <ListingProject
            key={id}
            nombre='Nombre del project'
            descripcion='Proyecto realizado con React'
            icons={[<HTML5 />, <CSS3 />, <Javascript />, <ReactIcon />, <Gatsby />]}
          />
        )}
      </GridProjects>
    </ContenedorProyectos>
  )
}
