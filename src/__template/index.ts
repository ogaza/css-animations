import './../styles/base.scss';
import './index.scss';

document.body.addEventListener('click', handleClick);

function handleClick(e) {
  document.body.style.setProperty('--bg-color', 'lightblue');
}
