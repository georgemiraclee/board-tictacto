import React from "react"
import CrossIcon from "../../assets/images/cross.png"
import CircleIcon from "../../assets/images/circle.png"
import { SquareStyled, IconStyled } from "./styled"

export default function Square({ onClick, value, rowIndex }) {
  return (
    <SquareStyled
      className={rowIndex === 2 ? "last" : ""}
      onClick={() => onClick()}
    >
      {value === null ? (
        ""
      ) : value === "X" ? (
        <IconStyled src={CrossIcon} />
      ) : (
        <IconStyled src={CircleIcon} />
      )}
    </SquareStyled>
  )
}
