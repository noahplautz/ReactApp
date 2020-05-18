export const Action = Object.freeze({
  LoadRounds: 'LoadRounds',
  FinishAddingRound: 'FinishaddingRound',
  EnterEditMode: 'EnterEditMode',
  LeaveEditMode: 'LeaveEditMode',
  FinishSavingRound: 'FinishSavingRound',
  FinishDeletingRound: 'FinishDeletingRound',
});

export function loadRounds(round) {
  return {
    type: Action.LoadRounds,
    payload: round
  };
}

export function finishAddingRound(round) {
  return {
    type: Action.FinishAddingRound,
    payload: round,
  }
}

export function finishSavingRound(round) {
  return {
    type: Action.FinishSavingRound,
    payload: round,
  }
}

export function finishDeletingRound(round) {
  return {
    type: Action.FinishDeletingRound,
    payload: round,
  }
}

export function enterEditMode(round) {
  return {
    type: Action.EnterEditMode,
    payload: round,
  }
}

export function leaveEditMode(round) {
  return {
    type: Action.LeaveEditMode,
    payload: round,
  }
}

function checkForErros(response) {
  if(!response.ok) {
    throw Error(`${response.status}: ${response.statusText}`);
  }
  return response;
}
const host = 'https://project2-api.duckdns.org:8442';

export function loadDay() {
  
  return dispatch => {
    fetch(`${host}/rounds`)
    .then(checkForErros)
    .then(response => response.json())
    .then(data => {
      if(data.ok) {
        loadRounds(data.rounds)
      }
    })
    .catch(e => console.error(e));
  };
}

export function startAddingRound(year, month, day) {
  const round = {year, month, day};
  const options = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(round),
  }

  return dispatch => {
    fetch(`${host}/rounds`, options)
    .then(checkForErros)
    .then(response => response.json())
    .then(data => {
      if(data.ok) {
        round.id = data.id;
        dispatch(finishAddingRound(round));
      }
    })
    .catch(e => console.error(e));
  };
}

export function startSavingRound(round) {
  const options = {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(round),
  }

  return dispatch => {
    fetch(`${host}/rounds/${round.id}`, options)
    .then(checkForErros)
    .then(response => response.json())
    .then(data => {
      if(data.ok) {
        dispatch(finishSavingRound(round));
      }
    })
    .catch(e => console.error(e));
  };
}

export function startDeletingRound(round) {
  const options = {
    method: 'DELETE', 
  };

  return dispatch => {
    fetch(`${host}/rounds/${round.id}`, options)
    .then(checkForErros)
    .then(response => response.json())
    .then(data => {
      if(data.ok) {
        dispatch(finishDeletingRound(round));
      }
    })
    .catch(e => console.error(e));
  };
}