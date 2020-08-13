import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  blanco: '#ffffff',
  background: '#121216',
  bgNavbar: '#191922',
  borde: '#32323d',
  rojo: '#d74b5c'
}

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };
    html {
    }
    body{
        background: #121216;
        color: ${colors.blanco};
        font-family: 'Montserrat';
        padding: 50px;
    }
    main > #gatsby-focus-wrapper {
        width: 100%;
    }
    @media (max-width: 1025px) {
        body{
            padding: 50px 50px 75px 50px;
        }
    }
    @media (max-width: 768px) {
        body{
            padding: 30px 30px 75px 30px;
        }
    }
`
export const Boton = styled.button`
    background: ${colors.rojo};
    border-radius: 4px;
    padding: 10px 32px;
    color: ${colors.blanco};
    border: 2px solid transparent;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    transition: .3s;
    cursor: pointer;
    &:hover{
        background: transparent;
        color: ${colors.rojo};
        border: 2px solid ${colors.rojo};
    }
`
