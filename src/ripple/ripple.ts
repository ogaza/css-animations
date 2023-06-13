import './ripple';
import './styles/button.scss';
import './styles/ripple.scss';
import './styles/style.scss';

var rippledEl = document.querySelector<HTMLElement>('.ripple');
rippledEl.addEventListener('mousedown', handleMouseDown);
rippledEl.addEventListener('touchstart', handleTouchStart);

function handleMouseDown(e) {
  const x = e.clientX;
  const y = e.clientY;
  const boundingClientRect = rippledEl.getBoundingClientRect();

  rippledEl.style.setProperty('--x', `${x - boundingClientRect.left}px`);
  rippledEl.style.setProperty('--y', `${y - boundingClientRect.top}px`);
}

function handleTouchStart(e) {
  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;
  const boundingClientRect = rippledEl.getBoundingClientRect();

  rippledEl.style.setProperty('--x', `${x - boundingClientRect.left}px`);
  rippledEl.style.setProperty('--y', `${y - boundingClientRect.top}px`);
}
