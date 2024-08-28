import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"
import Log from "./components/Log.jsx";


function deriveActivePlayer(gameTurns){

  let currentPlayer='X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
   currentPlayer='O';
  }
  return currentPlayer;
}


function App() {
  const [gameTurns,setGameTurns]=useState([]);
  //const [activePlayer, setActivePlayer]=useState('X');

  const activePlayer=deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex,colIndex){
   //  setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    
   /* 
     let currentPlayer='X';
     if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
      currentPlayer='0';
     }*/// this function replaced with this ->
     
     setGameTurns((prevTurns) => {
     const currentPlayer=deriveActivePlayer(prevTurns);

      const updatedTurns = [{square : {row : rowIndex , col : colIndex}, player : currentPlayer}  
        ,...prevTurns];
        
        return updatedTurns;
    });
  }
  

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player" >
         <Player initialName="player1" symbol="X" isActive={activePlayer === 'X'}/>
         <Player initialName="player2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>

      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
