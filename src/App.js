import React, {useEffect} from 'react';
import './App.css';
import {Golf} from './Golf';
import {useSelector, useDispatch} from 'react-redux';
import {loadDay} from './actions';



function App() {
  
  const rounds = useSelector(state => state.rounds);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(loadDay(4, 7));
  },[dispatch]);

  return (
    <div className="golf-root">
      
      {rounds.map(rounds => <Golf key={rounds.id}rounds={rounds}/>)}

    </div>
  );
}

export default App;


















// import React, { useState } from 'react';
// import './App.css';

// import {Golf} from './golf.js';
// import {Picker} from './picker.js';
// import {useSelector} from 'react-redux';


// const TrappeRiver = "orange";
// const CraneMeadows = "green";
// const PineValley = "red";
// const Greenwoood = "purple";
// const WausauCC = "blue";
// const AmLegion = "yellow";

// const initialScore = [
//   {course: "Trappe River", date: "4/19/20", round: "52", weather: "sunny & 72", holes: "9 holes", color: TrappeRiver},
//   {course: "Pine Valley", date: "4/20/20", round: "45", weather: "sunny & 72", holes: "9 holes", color: PineValley},
//   {course: "Crane Meadows", date: "4/21/20", round: "52", weather: "sunny & 72", holes: "9 holes", color: CraneMeadows},
// ];

// function App() {

//   //useSelector(state => state.sc)

//   const [scores, setScores] = useState(initialScore);

//   const removeScore = date => {
//     setScores(scores => scores.filter(score => score.date !== date));
//   }

//   const addScore = newScore => {
//     setScores(scores => [newScore, ...scores.filter(score => score.date !== newScore.date)])
//   }
  
//   return (
    
//     <div id="golf-root">
//       <Picker add={addScore}/>
//       {scores.map(score => <Golf key={score.date} score={score} remove={removeScore}/>)}

//     </div>
//   );
// }

// export default App;
