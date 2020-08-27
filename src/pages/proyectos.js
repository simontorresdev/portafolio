import React from 'react'
import SEO from '../components/seo'
import { Proyectos as Projects } from '../components/Proyectos'

const listProjects = require('../proyectos')

const Proyectos = () => (

  <>
    <SEO title='Proyectos' />
    <Projects arrayProjects={listProjects.listaProyectos()} title='Mis proyectos' pageProject />
  </>
)

export default Proyectos
