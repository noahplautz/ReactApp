const initialState = {
  scores: [
    {id: 3, year: 2020, month: 4, day: 29, course: "WausauCC", weather: "sunny", holes: 9, score: 42},
    {id: 2, year: 2020, month: 4, day: 28, course: "PineValley", weather: "cloudy", holes: 9, score: 48},
    {id: 1, year: 2020, month: 4, day: 22, course: "Greenwood", weather: "sunny", holes: 9, score: 45},
  ],
  isWaiting: false,
}

function reducer(state = initialState, action) {
  return state;
}

export default reducer;