// import { css } from 'styled-components';

const fontFamilies = {
  Montserrat: { font: 'Montserrat', fallback: 'Helvetica, Arial' },
  Anton: { font: 'Anton', fallback: 'Impact' }
};

export default family => {
  let style = 'inherit';
  if (family) {
    style = `'${fontFamilies[family].font}', ${fontFamilies[family].fallback}, sans-serif`;
  }
  return style;
};
