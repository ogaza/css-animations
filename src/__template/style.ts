import './../style.scss';
import './test.scss';

document.body.addEventListener('click', handleClick);

function handleClick(e) {
  document.body.style.setProperty('--bg-color', 'lightgray');
}
