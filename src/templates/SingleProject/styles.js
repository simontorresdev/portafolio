import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const ContainerSingleProject = styled.section`
  max-width: 800px;  
  margin: 0 auto;
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

export const ContainerImageWeb = styled.div`
  & .gatsby-image-wrapper{
    height: 400px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  && .gatsby-image-wrapper img{
    object-position: top center !important;
  }
`
export const ContainerImagesApp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & .gatsby-image-wrapper{
    height: 400px;
    margin-bottom: 20px;
    width: 48%;
    border-radius: 5px;
  }
  && .gatsby-image-wrapper img{
    object-position: top center !important;
  }
  @media (max-width: 768px) {
    & .gatsby-image-wrapper{
      width: 100%;
    }
    & .gatsby-image-wrapper:nth-child(2) {
      display: none;
    }
  }
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
