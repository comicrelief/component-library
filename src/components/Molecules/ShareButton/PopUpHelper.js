/* Great dual-screen solution from http://www.xtf.dk/ */
const popUpCentre = (url, popUpWidth, popUpHeight) => {
  // Fixes dual-screen position        Most browsers      Firefox
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : window.screen.left;
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : window.screen.top;

  let browserWidth;
  let browserHeight;

  if (window.innerWidth) {
    browserWidth = window.innerWidth;
  } else if (document.documentElement.clientWidth) {
    browserWidth = document.documentElement.clientWidth;
  } else {
    browserWidth = window.screen.width;
  }

  if (window.innerHeight) {
    browserHeight = window.innerHeight;
  } else if (document.documentElement.clientHeight) {
    browserHeight = document.documentElement.clientHeight;
  } else {
    browserHeight = window.screen.height;
  }

  const left = browserWidth / 2 - popUpWidth / 2 + dualScreenLeft;
  const top = browserHeight / 2 - popUpHeight / 2 + dualScreenTop;

  const newWindow = window.open(
    url,
    `width=${popUpWidth}, height=${popUpHeight}, top=${top}, left=${left}`
  );

  // Shift browser focus to newWindow
  if (window.focus) {
    newWindow.focus();
  }
};

export default popUpCentre;
