import styled from 'styled-components'
// import { colors } from '../../styles/GlobalStyles'

export const ContenedorListing = styled.li`
  list-style: none;
  cursor: pointer;
  & img{
    border-radius: 4px;
  }
`
export const ContenedorImagen = styled.div`
  position: relative;
  & section{
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: .3s;
    background: rgba(0,0,0,.5);
  }
  &:hover section{
    opacity: 1;
  }
  & section div{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: auto; 
  }
  & section div nav{
    background-color: #191922;
    border-radius: 4px;
    padding: 6px;
    margin: 8px;
    display: flex;
  }
  & section svg{
    width: 22px;
    height: 22px;
    margin: 2px 5px;
  }
  & section svg.Next{
    width: 32px;
    height: auto;
  }
  & section svg.Next path{
    fill: #fff;
  }
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
