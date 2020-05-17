import { Action } from "./actions";


const initialState = {
  rounds: [],
  isWaiting: false,
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case Action.LoadRounds:
      return {
        ...state,
        rounds: action.payload,

      }
      default:
        return state;
  }
}

export default reducer;