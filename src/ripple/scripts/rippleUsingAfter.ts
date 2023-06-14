import {
  setElementDataStateAttributeBasedOnEventType,
  setEventCoordinatesInElementProperties,
  getEventCoordinates
} from './eventHandlers';

var rippledEl = document.querySelector<HTMLElement>('.ripple-using-after');

rippledEl.addEventListener('mousedown', handleEvent);
rippledEl.addEventListener('mouseup', handleEvent);
rippledEl.addEventListener('touchstart', handleEvent);
rippledEl.addEventListener('touchend', handleEvent);
rippledEl.addEventListener('click', handleEvent);

function handleEvent(e) {
  setElementDataStateAttributeBasedOnEventType(rippledEl, e.type);

  if (e.type === 'mouseup' || e.type === 'mouseup') {
    return;
  }

  setEventCoordinatesInElementProperties(rippledEl, getEventCoordinates(e));
}
