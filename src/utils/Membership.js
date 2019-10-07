const onKeyPress = event => {
  const keyCode = event.keyCode || event.which;
  const keyValue = String.fromCharCode(keyCode);
  if (/\+|-|e/.test(keyValue)) event.preventDefault();
};

const isAmountValid = input => {
  const reg = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/g;
  const isValid = input * 1 > 0 && input * 1 <= 5000 && reg.test(input);
  return isValid;
};

const getUrlParameter = (name, amount) => {
  console.log(amount);
  const text = name.replace(/\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${text}=([^&#]*)`);
  const results = regex.exec(window.location.search);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// var getQueryString = function ( field, url ) {
//   var href = url ? url : window.location.href;
//   var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
//   var string = reg.exec(href);
//   return string ? string[1] : null;
// };
export { onKeyPress, isAmountValid, getUrlParameter };
