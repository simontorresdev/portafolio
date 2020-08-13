import React from 'react'
import SEO from '../components/seo'
import { Proyectos as Projects } from '../components/Proyectos'

const Proyectos = () => (
  <>
    <SEO title='Proyectos' />
    <Projects arrayProjects={[1, 2, 3, 4, 5, 6, 7, 8]} title='Mis proyectos' pageProject />
  </>
)

export default Proyectos
