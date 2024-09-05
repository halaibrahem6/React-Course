import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}){
    const timer =useRef();
    const [timeStarted,setTimeStarted]=useState(false);
    const [timerExpired,setTimerExpiered]=useState(false);



    function handleStart(){
       timer.current= setTimeout(() => {setTimerExpiered(true)}, targetTime * 1000);
        setTimeStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current);
    }

    return (

        <>
        {timerExpired && <ResultModal targetTime={targetTime} result={"Lost"}/>}
        <section className="challenge">
           <h2>{title}</h2>
            
           <p className="challenge-time"> {targetTime} second{targetTime > 1 ? 's' :''} </p>
           <p>
            <button onClick={timeStarted ? handleStop : handleStart}>
                {timeStarted ? "Stop" : "Start"} Challenge
            </button>
            </p>
            
            <p className={timeStarted ? 'active' : undefined}>
                {timeStarted ?  'Time is Running...' : 'Timer Inactive' }
                 </p>
        </section>
   </> )

}