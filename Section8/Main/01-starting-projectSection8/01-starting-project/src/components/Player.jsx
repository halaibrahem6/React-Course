
import { useState } from "react";

export default function Player() {

  const [enteredPlayerName,setPlayerName]=useState('');
  const [submitted,setSubmitted]=useState(false);

  function handleChange(event){
    setPlayerName(event.target.value);
  }

  function handleClick(){
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
