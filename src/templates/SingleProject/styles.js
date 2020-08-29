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
export const ContainerTechnologys = styled.div`
  margin: 30px 0;
  & h2{
    text-transform: uppercase;
    margin: 15px 0 20px 0;
    font-weight: 600;
    font-size: 22px;
  }
  & ul{
    display: flex;
  }
  & ul li{
    list-style: none;
  }
  & li svg{
    width: 50px;
    height: 32px;
    margin: 0px 20px;
  }
  & li svg.Next{
    width: 53px;
    height: auto;
  }
  & li svg.Next path,
  & li svg.wordpress path,
  & li svg.elementor path{
    fill: #fff;
  }
  & li svg.html path:nth-child(4),
  & li svg.css path:nth-child(4){
    fill: #fff;
  } 
  & li div p{
    margin: 0;
    margin-top: 0px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    margin-top: 5px;
  }
`
export const ContainerLinks = styled.div`
  & a:nth-child(2){
    margin-left: 20px;
  }
`
