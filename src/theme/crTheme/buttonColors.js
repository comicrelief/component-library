import { css } from 'styled-components';
import color from './colors';

const buttonColors = {
  // "Primary - red"
  red: {
    background: color('red'),
    textColour: color('white'),
    hoverBackground: color('red_dark'),
    hovertextColour: color('white')
  },
  // "Primary - black"
  black: {
    background: color('grey_dark'),
    textColour: color('white'),
    hoverBackground: color('black'),
    hovertextColour: color('white')
  },
  // "Primary - white"
  white: {
    background: color('white'),
    textColour: color('black'),
    hoverBackground: color('grey_medium'),
    hovertextColour: color('black')
  },
  // To be phased out:
  blue: {
    background: color('blue'),
    textColour: color('white'),
    hoverBackground: color('blue_dark'),
    hovertextColour: color('white')
  },
  blue_dark: {
    background: '#2042AD',
    textColour: color('white'),
    hoverBackground: color('blue_dark'),
    hovertextColour: color('white')
  },
  blue_light: {
    background: color('blue_light'),
    textColour: color('black'),
    hoverBackground: color('blue_dark'),
    hovertextColour: color('white')
  },
  coral: {
    background: color('coral'),
    textColour: color('black'),
    hoverBackground: color('coral_light'),
    hovertextColour: color('black')
  },
  coral_dark: {
    background: color('coral_dark'),
    textColour: color('white'),
    hoverBackground: color('coral'),
    hovertextColour: color('black')
  },
  coral_light: {
    background: color('coral_light'),
    textColour: color('black'),
    hoverBackground: color('coral_dark'),
    hovertextColour: color('white')
  },
  green: {
    background: color('green'),
    textColour: color('black'),
    hoverBackground: color('green_light'),
    hovertextColour: color('black')
  },
  green_dark: {
    background: color('green_dark'),
    textColour: color('white'),
    hoverBackground: color('green'),
    hovertextColour: color('black')
  },
  green_light: {
    background: color('green_light'),
    textColour: color('black'),
    hoverBackground: color('green_dark'),
    hovertextColour: color('white')
  },
  grey: {
    background: color('grey'),
    textColour: color('black'),
    hoverBackground: color('grey_light'),
    hovertextColour: color('black')
  },
  grey_dark: {
    background: color('grey_dark'),
    textColour: color('white'),
    hoverBackground: color('grey'),
    hovertextColour: color('black')
  },
  grey_light: {
    background: color('grey_light'),
    textColour: color('black'),
    hoverBackground: color('grey_dark'),
    hovertextColour: color('white')
  },
  magenta: {
    background: color('magenta'),
    textColour: color('black'),
    hoverBackground: color('magenta_light'),
    hovertextColour: color('black')
  },
  magenta_dark: {
    background: color('magenta_dark'),
    textColour: color('white'),
    hoverBackground: color('magenta'),
    hovertextColour: color('black')
  },
  magenta_light: {
    background: color('magenta_light'),
    textColour: color('black'),
    hoverBackground: color('magenta_dark'),
    hovertextColour: color('white')
  },
  orange: {
    background: color('orange'),
    textColour: color('black'),
    hoverBackground: color('orange_light'),
    hovertextColour: color('black')
  },
  orange_dark: {
    background: color('orange_dark'),
    textColour: color('white'),
    hoverBackground: color('orange'),
    hovertextColour: color('black')
  },
  orange_light: {
    background: color('orange_light'),
    textColour: color('black'),
    hoverBackground: color('orange_dark'),
    hovertextColour: color('white')
  },
  purple: {
    background: color('purple'),
    textColour: color('white'),
    hoverBackground: color('purple_dark'),
    hovertextColour: color('white')
  },
  purple_dark: {
    background: color('purple_dark'),
    textColour: color('white'),
    hoverBackground: color('purple'),
    hovertextColour: color('white')
  },
  purple_light: {
    background: color('purple_light'),
    textColour: color('black'),
    hoverBackground: color('purple_dark'),
    hovertextColour: color('white')
  },
  teal: {
    background: color('teal'),
    textColour: color('black'),
    hoverBackground: color('teal_light'),
    hovertextColour: color('black')
  },
  teal_dark: {
    background: color('teal_dark'),
    textColour: color('white'),
    hoverBackground: color('teal'),
    hovertextColour: color('black')
  },
  teal_light: {
    background: color('teal_light'),
    textColour: color('black'),
    hoverBackground: color('teal_dark'),
    hovertextColour: color('white')
  },
  transparent: {
    background: 'rgba(255, 255, 255, 0.5)',
    color: 'inherit',
    hoverBackground: 'rgba(255, 255, 255, 0.7)',
    hoverColor: 'inherit'
  },
  yellow: {
    background: color('yellow'),
    textColour: color('black'),
    hoverBackground: color('yellow_light'),
    hovertextColour: color('black')
  },
  yellow_dark: {
    background: color('yellow_dark'),
    textColour: color('white'),
    hoverBackground: color('yellow'),
    hovertextColour: color('black')
  },
  yellow_light: {
    background: color('yellow_light'),
    textColour: color('black'),
    hoverBackground: color('yellow_dark'),
    hovertextColour: color('white')
  }
};

export default (colorName, buttonType) => {
  let style = 'inherit';

  // Add a fallback, just in case someone is trying to use a non-existent colour:
  const thisColourName = buttonColors[colorName] ? colorName : 'red';

  if (colorName) {
    style = css`
      background-color: ${buttonColors[thisColourName].background};
      color: ${buttonColors[thisColourName].textColour};

      &:hover,
      &:focus,
      &:focus-within,
      &:focus-visible {
        background-color: ${buttonColors[thisColourName].hoverBackground};
        color: ${buttonColors[thisColourName].hoverColor};
        outline-offset: 3px;
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      // 'Secondary' and 'Tertiary' buttonType tweaks
      ${({ theme }) => ((buttonType === theme.buttonTypes.SECONDARY || buttonType === theme.buttonTypes.TERTIARY) && css`
        background-color: transparent;
        color: ${buttonColors[thisColourName].background};

        ${buttonType === theme.buttonTypes.SECONDARY && css`
          box-shadow: 0px 0px 0px 2px ${buttonColors[thisColourName].background} inset;
        `};

        &:hover,
        &:focus,
        &:focus-within,
        &:focus-visible {
          color: ${buttonColors[thisColourName].hoverBackground};
          background-color: transparent;

          ${buttonType === theme.buttonTypes.SECONDARY && css`
            box-shadow: 0px 0px 0px 2px ${buttonColors[thisColourName].hoverBackground} inset;
          `};
        }
      `)};
    `;
  }
  return style;
};
