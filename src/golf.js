import React from 'react';
import './Golf.css';

export function Golf(props) {
  const rounds = props.rounds;
  const months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];
  
  return (
    <div className="golf">   
      <div className="golf-round">
        <span className="year">{rounds.year}</span>
        <span className="month">{months[rounds.month - 1]} {rounds.day}</span>
        <span className="course">{rounds.course}</span>
        <span className="weather">{rounds.weather}</span>
        <span className="holes">{rounds.holes} holes</span>
        <span className="score">{rounds.score} strokes</span> 
      </div>   
         
    </div>
  )
}













// import React from 'react';


// export function Golf(props) {
//   const score = props.score;
  
//   return (
    
//     <div className="golf" style={{
//       backgroundColor: score.color
//       }}>
      
//       <span className="course-played">{score.course}</span>
//       <span className="delete-button" onClick={() => props.remove(score.date)}>&#x2716;</span>
//       <span className="score-round">{score.round}</span>
//       <span className="weather">{score.weather}</span>
//       <span className="holes">{score.holes}</span>
//       <span className="date">{score.date}</span>
          

//     </div>
//   );
// }