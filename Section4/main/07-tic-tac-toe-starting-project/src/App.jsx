import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"
import Log from "./components/Log.jsx";

function App() {
  const [gameTurnes,setGameTurns]=useState([]);
  const [activePlayer, setActivePlayer]=useState('X');

  function handleSelectSquare(rowIndex,colIndex){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    
    setGameTurns(prevTurns => {
     let currentPlayer='X';
     if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
      currentPlayer='0';
     }

      const updatedTurns = [{square : {row : rowIndex , col : colIndex}, player : activePlayer}  
        ,...prevTurns];
        
        return updatedTurns;
    });
  }
  

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
         <Player initialName="player1" symbol="X" isActive={activePlayer === 'X'}/>
         <Player initialName="player2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurnes}/>

      </div>
      <Log turns={gameTurnes}/>
    </main>
  )
}

export default App
