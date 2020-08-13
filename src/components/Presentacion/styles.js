import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const ContenedorPresentacion = styled.section`
  display: flex;
  max-width: 1180px;
  margin: 0 auto;
  & .gatsby-image-wrapper{
    width: 85%;
    border-radius: 4px;
  }
  @media (max-width: 1025px) {
    flex-direction: column;
    & .gatsby-image-wrapper{
      width: 80%;
    }
  }
  @media (max-width: 768px) {
    & .gatsby-image-wrapper{
      width: 100%;
    }
  }
`
export const Columna1 = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  @media (max-width: 1025px) {
    width: 100%;
    justify-content: center;
  }
`
export const Column2 = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
  @media (max-width: 1025px) {
    width: 100%;
    padding: 0px;
  }
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
    color: ${colors.rojo};
    position: relative;
  }
  & h3::after{
    position: absolute;
    content: "";
    width: 50px;
    height: 3px;
    background: #d74b5c;
    left: 80px;
    top: 8px;
  }
  & h2{
    text-transform: uppercase;
    margin: 15px 0;
    font-weight: 600;
    font-size: 32px;
  }
  & h1{
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  @media (max-width: 1025px) {
    & h3{
      margin-top: 10px;
    }
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
  & p{
    line-height: 1.5em;
    font-size: 15px;
    margin-bottom: 15px;
  }
`
