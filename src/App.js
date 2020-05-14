import React from 'react';
import './App.css';

import {Golf} from './golf.js';

const TrappeRiver = "orange";
const CraneMeadows = "green";
const PineValley = "red";
const Greenwoood = "purple";
const WausauCC = "blue";
const AmLegion = "yellow";

const initialScore = [
  {course: "Trappe River", round: "52", weather: "sunny & 72", holes: "9 holes", color: TrappeRiver},
  {course: "Pine Valley", round: "45", weather: "sunny & 72", holes: "9 holes", color: PineValley},
  {course: "Crane Meadows", round: "52", weather: "sunny & 72", holes: "9 holes", color: CraneMeadows},
];

function App() {
  return (
    
    <div id="golf-root">
      {initialScore.map(score => <Golf score={score} />)}
    </div>
  );
}

export default App;
