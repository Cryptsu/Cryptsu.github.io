// @ts-check
/* eslint-disable no-var, no-empty */

export const clientScript = () => {
  // TODO: This detection mechanism might
  // change in the future.

  // The reason I have to do this is because 
  // Safari has an auto text size adjust
  // mechanism. When screen is rotated,
  // this mechanism does not distribute evenly
  // into the elements, making the page appears
  // really unbalanced :(
  var ua = window.navigator.userAgent;
  var iOS = ua.match(/iPad/i) || ua.match(/iPhone/i);
  var webkit = ua.match(/WebKit/i);
  var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
  if (iOSSafari) {
    document.documentElement.style.webkitTextSizeAdjust = "100%";
  }
}