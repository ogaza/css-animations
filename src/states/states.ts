import './button.scss';
import './style.scss';
import './states.scss';
import './ripple';

var button = document.querySelector('button');
button.addEventListener('click', handleEvent);

var app = document.querySelector('#app');
var i = 0;
var states = ['loading', 'success', 'error'];

function handleEvent(e) {
  switch (e.type) {
    case 'click':
      setState();
      break;
  }
}

function setState() {
  var app = document.querySelector('#app');

  const state = states[i++ % 3];
  console.log("setting app's state to: ", state);
  app.setAttribute('data-state', state);

  console.log(app.getAttribute('data-state'));
}
