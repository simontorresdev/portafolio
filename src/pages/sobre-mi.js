import React from 'react'
import SEO from '../components/seo'
import { Presentación } from '../components/Presentacion'
import { Descripcion } from '../components/Descripcion'

const SobreMi = () => (
  <>
    <SEO title='Sobre mi' />
    <Presentación imagen='sobremi3.png' />
    <Descripcion />
  </>
)

export default SobreMi
