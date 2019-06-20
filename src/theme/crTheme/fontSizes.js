const fontSizes = {
  "xxs": '0.69375rem',
  "xs": '0.83125rem',
  "s": '1rem',
  "m": '1.2rem',
  "l": '1.625rem',
  "xl": '2.625rem',
  "xxl": '4rem',
};

export const fontSize = size => {
  if (size) {
    return fontSizes[size];
  }
  return '';
};
