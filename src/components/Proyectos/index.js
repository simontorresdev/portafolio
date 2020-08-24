import React from 'react'
import { ContenedorProyectos, GridProjects } from './styles'
import { ListingProject } from '../ListingProject'
import HTML5 from '../../icons/tecnologias/Html5'
import CSS3 from '../../icons/tecnologias/Css3'
import Javascript from '../../icons/tecnologias/Javascript'
import ReactIcon from '../../icons/tecnologias/React'
import Gatsby from '../../icons/tecnologias/Gatsby'

export const Proyectos = ({ arrayProjects, title, pageProject }) => {
  return (
    <ContenedorProyectos pageProject={pageProject}>
      <h2>{title}</h2>
      <GridProjects>
        {arrayProjects.map((project, id) =>
          <ListingProject
            key={id}
            nombre={project.name}
            descripcion='Proyecto realizado con React'
            icons={[<HTML5 />, <CSS3 />, <Javascript />, <ReactIcon />, <Gatsby />]}
            img={project.img}
          />
        )}
      </GridProjects>
    </ContenedorProyectos>
  )
}
