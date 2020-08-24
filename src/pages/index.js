import React from 'react'
import SEO from '../components/seo'
import { Presentación } from '../components/Presentacion'
import { Proyectos } from '../components/Proyectos'
import { listaProyectos } from '../proyectos'

const IndexPage = () => {
  console.log(listaProyectos)
  return (
    <>
      <SEO title='Inicio' />
      <Presentación boton imagen='fondoHome.png' />
      <Proyectos arrayProjects={listaProyectos} title='Mis proyectos' />
    </>
  )
}

export default IndexPage
