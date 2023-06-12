import './button.scss';
import './style.scss';
import './states.scss';
import './ripple.scss';

var button = document.querySelector('.button');
button.addEventListener('click', handleEvent);

var rippledEl = document.querySelector<HTMLElement>('.ripple');
rippledEl.addEventListener('click', ripple);

function handleEvent(e) {
  switch (e.type) {
    case 'click':
      setState();
      break;
  }
}

function ripple(e) {
  const x = e.clientX;
  const y = e.clientY;
  const boundingClientRect = rippledEl.getBoundingClientRect();

  rippledEl.style.setProperty('--y', `${y - boundingClientRect.top}px`);
  rippledEl.style.setProperty('--x', `${x - boundingClientRect.left}px`);
}

function setState() {
  var app = document.querySelector('#app');
  const currentState = app.getAttribute('data-state') ?? 'loading';

  app.setAttribute('data-state', getNewStateFor(currentState));
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
