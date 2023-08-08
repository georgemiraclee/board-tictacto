import styled from "styled-components"

export const SquareStyled = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid white;
  border-width: 0 1px 1px 0;
  display: flex; /* flex styling to center content in divs */
  align-items: center;
  justify-content: center;

  &:nth-of-type(3n) {
    border-right-width: 0;
  }

  &.last {
    border-bottom-width: 0;
  }
`

export const IconStyled = styled.img`
  width: 100px;
  height: 100px;
`
