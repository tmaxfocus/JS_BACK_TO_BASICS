const helpButton = document.getElementById("help-button");

function displayHelpWindow() {
  window.open("help.html");
}

helpButton.onclick = displayHelpWindow;

// Events Supported by All HTML Elements
// Event . . . . . . Occurs When This Happens
// abort The loading of a file is aborted.
// change An element’s value has changed since losing and regaining focus.
// click A mouse button has been clicked on an element.
// dblclick A mouse button has been clicked twice on an element.
// input The value of an <input> or <textarea> element has changed.
// keydown A key is pressed.
// keyup A key is released after being pressed.
// mousedown A mouse button has been pressed.
// mouseenter A mouse pointer is moved onto the element.
// mouseleave A mouse pointer is moved off the element.
// mousemove A mouse pointer has moved.
// mouseout A mouse pointer is moved off the element.
// mouseover A mouse pointer is moved onto the element.
// mouseup A mouse button is released.
// mousewheel A wheel button of a mouse is rotated.
// reset A form is reset.
// select Text has been selected.
// submit A form is submitted

//
// The third parameter to addEventListener() is an optional options object. If you
// include the options object, it can contain any of the following properties:
// » capture: This option is a Boolean value that, when set to true, causes the
// event to be dispatched on the element the listener is registered to before
// being dispatched to elements beneath it on the DOM tree. By default, capture
// is set to false, and that’s almost always what you want to happen.
// » once: This option is a Boolean value that causes the event listener to be
// removed from the element automatically after the first time it’s invoked. By
// default, once is set to false.
// » passive: This option is a Boolean value indicating that the callback function
// that handles the event won’t call preventDefault() to block the default
// browser event that the event normally triggers. By default, this option is
// false. However, setting it to true can be used to improve performance of a
// user interface in some cases.
// » signal: The signal option takes an AbortSignal as its value. An AbortSignal
// is an object containing an abort() method that, when called, removes the
// event listener.
// The addEventListener() method has several advantages over the other two
// methods for handling events:
// » You can use it to apply more than one event listener to an element.
// » It works with any node in the DOM, not just on elements.
// » It gives you more control over when it’s activated.

//Setting an event listener
window.addEventListener("load", app);

function app() {
  const trackingArea = document.getElementById("tracking-area");
  trackingArea.addEventListener("mouseover", onMouseMove);
  function onMouseMove(e) {
    setPosition({ x: e.offsetX, y: e.offsetY });
  }
}

function setPosition(position) {
  const { x, y } = position;
  const positionElement = document.getElementById("current-position");
  positionElement.innerHTML = `x: ${x}; y: ${y}`;
}
