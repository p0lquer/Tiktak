import { useState } from "react";
import Cero from "./Cero";
import calculateWinner from "./Winner";
function EKIS() {
  const [isXNext, setIsXNext] = useState(true);
  const [cubos, setCubos] = useState(Array(9).fill(null));

  //   function calculateWinner(cubos: string[]) {

  function handleClick(i: number) {
    if (cubos[i] || calculateWinner(cubos)) {
      return;
    }
    const nextCubo = cubos.slice();
    nextCubo[i] = isXNext ? "X" : "O";
    setIsXNext(!isXNext);
    setCubos(nextCubo);
  }

  const winner = calculateWinner(cubos);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }

  return (
    <>
      <div>
        <h1 className="title">{status}</h1>
      </div>
      <div className="board-row">
        <Cero value={cubos[0]} onCuboClick={() => handleClick(0)} />
        <Cero value={cubos[1]} onCuboClick={() => handleClick(1)} />
        <Cero value={cubos[2]} onCuboClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Cero value={cubos[3]} onCuboClick={() => handleClick(3)} />
        <Cero value={cubos[4]} onCuboClick={() => handleClick(4)} />
        <Cero value={cubos[5]} onCuboClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Cero value={cubos[6]} onCuboClick={() => handleClick(6)} />
        <Cero value={cubos[7]} onCuboClick={() => handleClick(7)} />
        <Cero value={cubos[8]} onCuboClick={() => handleClick(8)} />
      </div>
    </>
  );
}

/* eslint-disable react-refresh/only-export-components */
export default EKIS;
