var rippledEl = document.querySelector<HTMLElement>('.ripple');
rippledEl.addEventListener('mousedown', getHandleMouseDown(rippledEl));
rippledEl.addEventListener('touchstart', getHandleTouchStart(rippledEl));

function getHandleMouseDown(htmlElement) {
  return function handleMouseDown(e) {
    const x = e.clientX;
    const y = e.clientY;
    const boundingClientRect = htmlElement.getBoundingClientRect();

    htmlElement.style.setProperty('--x', `${x - boundingClientRect.left}px`);
    htmlElement.style.setProperty('--y', `${y - boundingClientRect.top}px`);
  };
}

function getHandleTouchStart(htmlElement) {
  return function handleTouchStart(e) {
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    const boundingClientRect = htmlElement.getBoundingClientRect();

    htmlElement.style.setProperty('--x', `${x - boundingClientRect.left}px`);
    htmlElement.style.setProperty('--y', `${y - boundingClientRect.top}px`);
  };
}

var rippledEl2 = document.querySelector<HTMLElement>('.ripple-using-after');

rippledEl2.addEventListener('mousedown', handleEvent);
rippledEl2.addEventListener('mousedown', getHandleMouseDown(rippledEl2));
rippledEl2.addEventListener('mouseup', handleEvent);
rippledEl2.addEventListener('touchstart', handleEvent);
rippledEl2.addEventListener('touchstart', getHandleTouchStart(rippledEl2));
rippledEl2.addEventListener('touchend', handleEvent);
rippledEl2.addEventListener('click', handleEvent);

export function handleEvent(e) {
  switch (e.type) {
    case 'mousedown':
    case 'touchstart':
      rippledEl2.dataset.state = 'pressed';
      break;
    case 'mouseup':
    case 'touchend':
      rippledEl2.removeAttribute('data-state');
      break;
    case 'click':
      rippledEl2.dataset.state = 'clicked';
      break;
    default:
      break;
  }
}
