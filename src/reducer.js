import { Action } from "./actions";


const initialState = {
  rounds: [],
  isWaiting: false,
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case Action.LoadRounds:
      return {
        ...state,
        rounds: action.payload,

      };
    case Action.FinishAddingRound:
      return {
        ...state,
        rounds: [{...action.payload, isEditing: true}, ...state.rounds],
      };
    case Action.EnterEditMode:
      return {
        ...state,
        rounds: state.rounds.map(round => {
          if(round.id === action.payload.id) {
            return {...round, isEditing: true};
          } else {
            return round;
          }
        }),
      }
    case Action.LeaveEditMode:
      return {
        ...state,
        rounds: state.rounds.map(round => {
          if(round.id === action.payload.id) {
            return {...round, isEditing: undefined};
          } else {
            return round;
          }
        }),
      };
      case Action.FinishSavingRound:
        return {
          ...state,
          rounds: state.rounds.map(round => {
            if(round.id === action.payload.id) {
              return action.payload;
            } else {
              return round;
            }
          }),
        };
      case Action.FinishDeletingRound:
        return {
          ...state,
          rounds: state.rounds.filter(round => round.id !== action.payload.id),
        };
      default:
        return state;
  }
}

export default reducer;