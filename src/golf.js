import React from 'react';


export function Golf(props) {
  const score = props.score;
  
  return (
    
    <div className="golf" style={{
      backgroundColor: score.color
      }}>
      
      <span className="course-played">{score.course}</span>
      <span className="delete-button">&#x2716;</span>
      <span className="score-round">{score.round}</span>
      <span className="weather">{score.weather}</span>
      <span className="holes">{score.holes}</span>
      

    </div>
  );
}