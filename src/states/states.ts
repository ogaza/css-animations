import './button.scss';
import './style.scss';
import './states.scss';
import './ripple';

var button = document.querySelector('button');
button.addEventListener('click', handleEvent);

function setState() {
  var app = document.querySelector('#app');
  const currentState = app.getAttribute('data-state') ?? 'loading';

  app.setAttribute('data-state', getNewStateFor(currentState));
}

function handleEvent(e) {
  switch (e.type) {
    case 'click':
      setState();
      break;
  }
}

var i = 0;
function getNewStateFor(currentState) {
  if (currentState !== 'loading') return machine.states[currentState].on['CLICK'];

  if (i++ % 3) return machine.states[currentState].on['CLICK'];

  return 'error';
}

const machine = {
  initial: 'loading',
  states: {
    loading: {
      on: { CLICK: 'success' }
    },
    success: {
      on: { CLICK: 'loading' }
    },
    error: {
      on: { CLICK: 'loading' }
    }
  }
};
