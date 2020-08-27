import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const ContainerSingleProject = styled.section`
  max-width: 800px;  
  margin: 0 auto;
  & .gatsby-image-wrapper{
    height: 400px;
    margin-bottom: 20px;
  }
  && .gatsby-image-wrapper img{
    object-position: top center !important;
  }
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
export const ContainerTechnologys = styled.nav`
  margin: 30px 0;
  & h2{
    text-transform: uppercase;
    margin: 15px 0;
    font-weight: 600;
    font-size: 22px;
  }
  & ul{
    display: flex;
    margin-top: 2 0px;
  }
  & ul li{
    list-style: none;
  }
  & li svg{
    width: 32px;
    height: 32px;
    margin: 0px 20px;
  }
`
