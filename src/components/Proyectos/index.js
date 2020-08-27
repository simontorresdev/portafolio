import React from 'react'
import { ContenedorProyectos, GridProjects } from './styles'
import { ListingProject } from '../ListingProject'

export const Proyectos = ({ arrayProjects, title, pageProject }) => {
  return (
    <ContenedorProyectos pageProject={pageProject}>
      <h2>{title}</h2>
      <GridProjects>
        {arrayProjects.map((project, id) =>
          <ListingProject
            key={id}
            nombre={project.name}
            excerpt={project.excerpt}
            icons={project.technologys}
            img={project.img}
            url={project.url}
          />
        )}
      </GridProjects>
    </ContenedorProyectos>
  )
}
