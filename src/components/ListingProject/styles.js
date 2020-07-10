import styled from 'styled-components'
// import { colors } from '../../styles/GlobalStyles'

export const ContenedorListing = styled.li`
  list-style: none;
  & img{
    border-radius: 4px;
  }
`
export const ContenedorImagen = styled.div`
  position: relative;
`
export const ContenedorDescripcion = styled.div`
  padding-top: 8px;
  & h2{
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 3px;
    padding: 0;
  }
  & h3{
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: #91919d;
  }
`
