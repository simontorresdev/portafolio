import React from 'react'
import SEO from '../components/seo'
import { Presentación } from '../components/Presentacion'
import { Proyectos } from '../components/Proyectos'

const listProjects = require('../proyectos')

const IndexPage = () => {
  const projects4 = listProjects.listaProyectos().slice(0, 4)
  return (
    <>
      <SEO title='Inicio' />
      <Presentación boton imagen='fondoHome.png' />
      <Proyectos arrayProjects={projects4} title='Mis proyectos' />
    </>
  )
}

export default IndexPage
