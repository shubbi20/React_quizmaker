import React from "react"; 

 export function Result({score, playagain}){
   return(
     <div>
    <h1 className="quizresult">Your Score:{" "} {score}/5</h1>
     <div >
     <button onClick={playagain}>PlayAgain</button>
     </div>
     </div>

   );
 }

