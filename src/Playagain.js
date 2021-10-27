import React from "react"; 
import './script.css';

 export function Result({score, playagain}){
   return(
     <div>
    <h1 className="quizresult">Your Score:{" "} {score}/5</h1>
     <div >
     <button id="replay" onClick={playagain}> PlayAgain </button>
     </div>
     </div>

   )
 }

