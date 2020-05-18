import React, {useState} from 'react';
import './Golf.css';
import {useDispatch} from 'react-redux';
import {enterEditMode, leaveEditMode, startSavingRound, startDeletingRound} from './actions';

const months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];

export function Golf(props) {
  const rounds = props.rounds;
  
  const dispatch = useDispatch();
  const [year, setYear] = useState(rounds.year);
  const [month, setMonth] = useState(rounds.month);
  const [day, setDay] = useState(rounds.day);
  const [course, setCourse] = useState(rounds.course);
  const [weather, setWeather] = useState(rounds.weather);
  const [holes, setHoles] = useState(rounds.holes);
  const [score, setScore] = useState(rounds.score);

  const onEdit = () => {
    dispatch(enterEditMode(rounds));
  }

  const onCancel = () => {
    dispatch(leaveEditMode(rounds));

  }

  const onSave = () => {
    dispatch(startSavingRound({
      id: rounds.id, year, month, day, course, weather, holes, score
    }));
  }

  const onDelete = () => {
    dispatch(startDeletingRound(rounds));
  }

  if(rounds.isEditing) {
    return (   
    <div className="golf">   
      <div className="golf-round">
        <input className="year-input" type="text" placeholder="year" value={year} onChange={e =>
          setYear(parseInt(e.target.value))}/>
        <input className="month-input" type="text" placeholder="month" value={month} onChange={e =>
          setMonth(parseInt(e.target.value))}/>
        <input className="day-input" type="text" placeholder="day" value={day} onChange={e =>
          setDay(parseInt(e.target.value))}/>
        <input className="course-input" type="text" placeholder="course" value={course}  onChange={e =>
          setCourse((e.target.value))}/>
        <input className="weather-input" type="text" placeholder="weather" value={weather} onChange={e =>
          setWeather((e.target.value))}/>
        <input className="holes-input" type="text" placeholder="num holes" value={holes} onChange={e =>
          setHoles(parseInt(e.target.value))}/>
        <input className="score-input" type="text" placeholder="strokes" value={score} onChange={e =>
          setScore(parseInt(e.target.value))}/>
        <button className="save-button" onClick={onSave}>save</button>
        <button className="cancel-button" onClick={onCancel}>cancel</button>
        <button onClick={onDelete} className="delete-button">delete</button>
      </div>   
       
    </div> );
  } else {  
    return (
      <div className="golf">   
        <div className="golf-round">
          
          <span className="year">{rounds.year}</span>
          <span className="month">{months[rounds.month - 1]} {rounds.day}</span>
          <button className="edit-button" onClick={onEdit}>edit</button>
          <span className="course">{rounds.course}</span>
          <span className="weather">{rounds.weather}</span>
          <span className="holes">{rounds.holes}</span>
          <span className="score">{rounds.score}</span> 
        </div>   
            
      </div>
    );
  }
}