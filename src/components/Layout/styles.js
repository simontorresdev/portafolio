import styled from 'styled-components'

export const MyMain = styled.main`
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 220px;
  @media (max-width: 1025px) {
    margin-left: 0px;
  }
`
