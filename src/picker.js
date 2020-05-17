







// import React, { useState } from 'react';


// export function Picker(props) {
//   // const TrappeRiver = "orange";
//   // const CraneMeadows = "green";
//   // const PineValley = "red";
//   // const Greenwoood = "purple";
//   // const WausauCC = "blue";
//   // const AmLegion = "yellow";
//   const[course, setCourse] = useState();
//   const[date, setDate] = useState();
//   const[weather, setWeather] = useState();
//   const[holes, setHoles] = useState();
//   const[round, setRound] = useState();

  

//   return (

//     <div id="picker" className="golf" style={{
//       backgroundColor: "green"
//       }}>

//       <label id="course-input">
//         <select value={course} onChange={e => setCourse(e.target.value)}>
//           <option disabled selected value>-- Select Course --</option>
//           <option value="Trappe River">Trappe River</option>
//           <option value="Crane Meadows">Crane Meadows</option>
//           <option value="Pine Valley">Pine Valley</option>
//           <option value="Greenwoood Hills">Greenwood Hills</option>
//           <option value="Wausau Country Club">Wausau Country Club</option>
//           <option value="American Legion">American Legion</option>
//         </select>
//       </label>

//       <input type="date" id="date-input" value={date} onChange={e => setDate(e.target.value)}></input>

//       <input type="text" id="weather-input" placeholder="Weather" value={weather} onChange={e => setWeather(e.target.value)}></input>

//       <label id="hole-input">
//         <select value={holes} onChange={e => setHoles(e.target.value)}>
//           <option disabled selected value>-- Select Holes --</option>
//           <option value="9">9 Holes</option>
//           <option value="18">18 Holes</option>
//         </select>
//       </label>

//       <input type="text" id="score-input" placeholder="Score" value={round} onChange={e => parseInt(setRound(e.target.value))}></input>

//       <button id="add-button" onClick={() => props.add({course, date, weather, holes, round})}>Add Round</button>

//     </div>
//   );
// }