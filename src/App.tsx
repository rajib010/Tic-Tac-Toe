import Board from "./Board";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const [lock, setLock] = useState<boolean>(false);
  const [data, setData] = useState<string[]>(Array(9).fill(""));

  const handleClick = async (index: number) => {
    if (lock || data[index]) return;

    const newData = [...data];
    const newCount = count + 1;
    const newValue = count % 2 === 0 ? "O" : "X";

    newData[index] = newValue;
    setData(newData);
    setCount(newCount);

    const winner = calculateWinner(newData);
    if (winner) {
      alert(`${winner} wins!`);
      setLock(true);
    } else if (!newData.includes("")) {
      alert('Draw!');
      setLock(true);
    }
  };
  const resetGame = () => {
    setData(Array(9).fill(""));
    setCount(0);
    setLock(false);
  };

  useEffect(() => {
    const winner = calculateWinner(data);
    if (winner) {
      setLock(true);
      alert(`${winner} wins!!!`);
    } else if (!data.includes("")) {
      setLock(true);
      alert("Draw!!!");
    }
  }, [data, count]);

  const calculateWinner = (squares: string[]): string | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <div className="min-w-md flex flex-col gap-5 my-[4vw] mx-auto justify-center items-center h-[80vh]">
      <h1 className="text-center text-3xl">Welcome to TICTACTOE</h1>
      <Board data={data} handleClick={handleClick} resetGame={resetGame} />
    </div>
  );
}

export default App;
