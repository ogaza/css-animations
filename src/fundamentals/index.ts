import './../styles/base.scss';
import './fundamentals.scss';

document.body.addEventListener('click', handleClick);

function handleClick(e) {
  document.body.style.setProperty('--bg-color', 'rgb(203, 204, 142)');
}
