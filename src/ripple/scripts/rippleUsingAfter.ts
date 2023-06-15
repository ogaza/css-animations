import {
  setElementDataStateAttributeBasedOnEventType,
  setEventCoordinatesInElementProperties,
  getEventCoordinates
} from './eventHandlers';

var button = document.querySelector<HTMLElement>('.ripple-using-after');

const events = ['mousedown', 'mouseup', 'touchstart', 'touchend', 'click'];
const addEventHandlerToButton = getEventHandlerRegistratorFor(button, handleEvent);
events.forEach(addEventHandlerToButton);

function handleEvent(e) {
  setElementDataStateAttributeBasedOnEventType(button, e.type);

  if (e.type === 'mouseup' || e.type === 'mouseup') {
    return;
  }

  setEventCoordinatesInElementProperties(button, getEventCoordinates(e));
}

function getEventHandlerRegistratorFor(htmlElement, handler) {
  return function registerHandlerFor(event) {
    htmlElement?.addEventListener(event, handler);
  };
}
