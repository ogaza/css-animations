var uiButton = document.querySelector('.ui-button');
uiButton.addEventListener('click', handleEvent);

const subscribeState = 'subscribe';
const subscribingState = 'subscribing';
const resultStates = ['success', 'error'];

export function handleEvent() {
  if (getCurrentState() === subscribingState) {
    return;
  }

  setStateTo(subscribingState);
  setResultStateAfterTimeout();
}

function setStateTo(state) {
  const form = document.querySelector('.ui-form');
  form.setAttribute('data-state', state);
}

function setResultStateAfterTimeout() {
  setTimeout(setResultState, 700);
}

const noOfStates = resultStates.length;
var i = 0;
function setResultState() {
  setStateTo(resultStates[++i % noOfStates]);
}

function getCurrentState() {
  const form = document.querySelector('.ui-form');
  return form.getAttribute('data-state') ?? subscribeState;
}
