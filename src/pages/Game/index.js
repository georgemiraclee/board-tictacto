import React, { useEffect, useState } from "react"
import Player1Icon from "../../assets/images/player_1.png"
import Player2Icon from "../../assets/images/player_2.png"
import Board from "../../components/Board"
import {
  GameInfoStyled,
  GameStyled,
  IconPlayerStyled,
  InfoColumn,
  StatusStyled,
} from "./styled"

const initHistory = [
  {
    squares: Array(9).fill(null),
  },
]

export default function Game() {
  const [history, setHistory] = useState(initHistory)
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)
  const [status, setStatus] = useState("")
  const [isEnd, setIsEnd] = useState(false)

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  const handleClick = (i) => {
    const _history = history.slice(0, stepNumber + 1)
    const current = _history[_history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = xIsNext ? "X" : "O"
    setHistory(
      _history.concat([
        {
          squares: squares,
        },
      ])
    )
    setStepNumber(_history.length)
    setXIsNext((prev) => !prev)
  }

  const increaseScoreToLocalStorage = (name) => {
    const score =
      localStorage.getItem(name) != null
        ? parseInt(localStorage.getItem(name)) + 1
        : 1
    localStorage.setItem(name, score)
  }

  const getIconPlayer = (code) => {
    if (code === "X") {
      return <IconPlayerStyled src={Player1Icon} />
    } else {
      return <IconPlayerStyled src={Player2Icon} />
    }
  }

  const getWinner = () => {
    const current = history[stepNumber]
    const winner = calculateWinner(current.squares)

    let _status
    if (winner) {
      _status = (
        <StatusStyled>
          <div className="text">Winner:</div> {getIconPlayer(winner)}
        </StatusStyled>
      )
      if (winner === "X") {
        increaseScoreToLocalStorage("score_x")
      } else {
        increaseScoreToLocalStorage("score_y")
      }
      setIsEnd(true)
    } else if (stepNumber === 9) {
      _status = "Tie"
      increaseScoreToLocalStorage("tie")
    } else {
      _status = (
        <StatusStyled>
          <div className="text">Pemain Selanjutnya:</div>
          {xIsNext ? getIconPlayer("X") : getIconPlayer("O")}
        </StatusStyled>
      )
    }

    setStatus(_status)
  }

  const checkWinner = () => {
    if (isEnd) {
      setTimeout(() => {
        setStatus("")
        setHistory(initHistory)
        setStepNumber(0)
        setXIsNext(true)
      }, 1000)
    }
  }

  useEffect(() => {
    getWinner()
  }, [history])

  useEffect(() => {
    checkWinner()
  }, [status])

  return (
    <GameStyled>
      <div>
        <Board
          squares={history[stepNumber].squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <GameInfoStyled>
        <InfoColumn>
          <div className="label">Pemain 1(X)</div>
          <div className="value">{localStorage.getItem("score_x") || "0"}</div>
        </InfoColumn>
        <InfoColumn>
          <div className="label">Mengikat</div>
          <div className="value">{localStorage.getItem("tie") || "0"}</div>
        </InfoColumn>
        <InfoColumn>
          <div className="label">Pemain 2(Y)</div>
          <div className="value">{localStorage.getItem("score_y") || "0"}</div>
        </InfoColumn>
        {status}
      </GameInfoStyled>
    </GameStyled>
  )
}
