import '../styles/base.scss';
import './styles/ball.scss';
import './styles/form-animations.scss';
import './styles/keyframes.scss';

var button = document.getElementsByClassName('ui-button')[0];
button.addEventListener('click', handleEvent);

function handleEvent(e) {
  console.log('handling event: ', e);

  switch (e.type) {
    case 'click':
      setState('subscribing');
      break;
  }
}

function setState(state) {
  console.log('button clicked, new state is:', state);
}
