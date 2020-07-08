import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const ContenedorPresentacion = styled.section`
  display: flex;
  & .gatsby-image-wrapper{
    width: 100%;
    border-radius: 4px;
  }
  & .gatsby-image-wrapper img{
    object-position: top left !important;
  }
`
export const Columna1 = styled.div`
  width: 35%;
`
export const Column2 = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
`
export const PresentacionTop = styled.div`
  display: flex;
`
export const PresentacionCol1 = styled.div`
  width: 60%;
  & h3{
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${colors.rojo}
  }
`
export const PresentacionCol2 = styled.div`
  width: 40%;
`
export const PresentacionBottom = styled.div`
  display: flex;
`
export const PresentacionCol3 = styled.div`
  width: 100%;
`
