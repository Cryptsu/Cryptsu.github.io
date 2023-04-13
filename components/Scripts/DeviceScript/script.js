// @ts-ignore
/* eslint-disable no-var, no-empty */
export const clientScript = (
  IOS_ClassName,
  Safari_ClassName
) => {
  // TODO: This detection mechanism might change in the future.
  var documentElement = document.documentElement;
  var userAgent = window.navigator.userAgent;

  // Detect IOS devices.
  var isIOS = userAgent.match(/iPad|iPhone/i);
  if (isIOS)
    documentElement.classList.add(IOS_ClassName);

  // Detect Safari browsers.
  var webkit = userAgent.match(/WebKit/i);
  var usesSafari = isIOS && webkit && !userAgent.match(/CriOS/i);
  if (usesSafari)
    documentElement.classList.add(Safari_ClassName);
}