import styled from "styled-components"

export const GameStyled = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameInfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 50px;

  h1 {
    color: white;
  }
`

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  min-width: 100px;

  .label {
    font-weight: 500;
    font-size: 20px;
  }

  .value {
    margin: 20px 0;
    font-weight: bold;
    font-size: 50px;
  }
`

export const IconPlayerStyled = styled.img`
  width: 50px;
  height: 50px;
  margin: 25px 0;
`

export const StatusStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;

  .text {
    font-weight: 500;
    font-size: 20px;
    color: white;
  }
`
