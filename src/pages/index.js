import React from 'react'
import SEO from '../components/seo'
import { Presentación } from '../components/Presentacion'
import { Proyectos } from '../components/Proyectos'

const IndexPage = () => (
  <>
    <SEO title='Inicio' />
    <Presentación boton imagen='fondoHome.png' />
    <Proyectos arrayProjects={[1, 2, 3, 4]} title='Mis proyectos' />
  </>
)

export default IndexPage
