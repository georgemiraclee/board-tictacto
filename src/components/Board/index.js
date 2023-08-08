import React from "react"
import Square from "../Square"
import { BoardRowStyled, BoardStyled } from "./styled"

export default function Board({ squares, onClick }) {
  const boardRow = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ]

  const renderSquare = (i, rowIndex) => {
    return (
      <Square
        key={i}
        rowIndex={rowIndex}
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    )
  }

  return (
    <BoardStyled>
      {boardRow.map((e, i) => (
        <BoardRowStyled key={"board-row" + i}>
          {e.map((u) => renderSquare(u, i))}
        </BoardRowStyled>
      ))}
    </BoardStyled>
  )
}
