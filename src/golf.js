import React from 'react';

export function Golf(props) {
  const golf = props.golf;
  const months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];
  
  return (
    <div className="golf">
      <div className="golf-left">
        <span className="year">{golf.year}</span>
        <span className="month">{months[golf.month - 1]} {golf.day}</span>
        <span className="course">{golf.course}</span>
        <span className="weather">{golf.weather}</span>
        <span className="holes">{golf.holes}</span>
        <span className="score">{golf.score}</span>

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