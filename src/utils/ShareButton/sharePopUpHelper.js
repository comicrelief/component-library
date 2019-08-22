/* Handles issues related to screen/browser positions on dual-screen setups-  http://www.xtf.dk/ */
const popUpCentre = (url, popUpWidth, popUpHeight) => {
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

  const popUpLeft = browserWidth / 2 - popUpWidth / 2 + dualScreenLeft;
  const popUpTop = browserHeight / 2 - popUpHeight / 2 + dualScreenTop;

  const newWindow = window.open(
    url,
    '',
    `width=${popUpWidth}, height=${popUpHeight}, top=${popUpTop}, left=${popUpLeft}`
  );

  // Shift browser focus to newWindow
  if (window.focus) {
    newWindow.focus();
  }
};

export default popUpCentre;
