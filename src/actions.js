export const Action = Object.freeze({
  LoadRounds: 'LoadRounds',
});

export function loadRounds(rounds) {
  return {
    type: Action.LoadRounds,
    payload: rounds,
  };
}

function checkForErros(response) {
  if(!response.ok) {
    throw Error(`${response.status}: ${response.statusText}`);
  }
  return response;
}
const host = 'https://project2-api.duckdns.org:8442';

export function loadDay(month, day) {
  return dispatch => {
    fetch(`${host}/rounds/${month}/${day}`)
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