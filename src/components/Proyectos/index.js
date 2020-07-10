import React from 'react'
import { ContenedorProyectos, GridProjects } from './styles'
import { ListingProject } from '../ListingProject'

export const Proyectos = () => {
  return (
    <ContenedorProyectos>
      <h2>Proyectos</h2>
      <GridProjects>
        {[1, 2, 3, 4].map(id => <ListingProject key={id} />)}
      </GridProjects>
    </ContenedorProyectos>
  )
}
