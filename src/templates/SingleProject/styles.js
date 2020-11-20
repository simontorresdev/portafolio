import styled, { css } from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const ContainerSingleProject = styled.section`
  max-width: 1000px;  
  margin: 0 auto;
  ${props => props.modoApp && css` 
    display: flex;
    align-items: center;
    & section:nth-child(1){
      width: 30%;
    }
    & section:nth-child(2){
      width: 70%;
      padding-left: 40px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      && section{
        width: 100%;
        padding: 0;
      }
    }
  `}
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
    left: 90px;
    top: 8px;
  }
  & h1{
    text-transform: uppercase;
    margin: 15px 0;
    font-weight: 600;
    font-size: 32px;
  }
  & p{
    line-height: 1.5em;
    font-size: 15px;
    margin-bottom: 15px;
  }
`

export const ContainerImageWeb = styled.section`
  & .gatsby-image-wrapper{
    height: 400px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  && .gatsby-image-wrapper img{
    object-position: top center !important;
  }
  ${props => props.modoApp && css` 
    & .gatsby-image-wrapper{
      width: 100%;
      height: auto;
    }
  `}
`
export const ContainerLinks = styled.div`
  & a:nth-child(2){
    margin-left: 20px;
  }
  @media (max-width: 768px) {
    & button{
      width: 100%;
    }
    & a:nth-child(2){
      display: block;
      margin: 20px 0 0 0;
    }
  }
`
