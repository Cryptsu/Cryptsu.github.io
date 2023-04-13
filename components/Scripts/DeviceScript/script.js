// @ts-ignore
/* eslint-disable no-var, no-empty */
export const clientScript = (IOS_Safari_ClassName) => {
  // TODO: This detection mechanism might
  // change in the future.
  var ua = window.navigator.userAgent;
  var iOS = ua.match(/iPad/i) || ua.match(/iPhone/i);
  var webkit = ua.match(/WebKit/i);
  var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
  if (iOSSafari) {
    document.documentElement.classList.add(IOS_Safari_ClassName);
  }
}