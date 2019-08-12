import React from 'react';
import { ThemeProvider } from 'styled-components';
import { crTheme } from '../index';

import '../theme/shared/global.css';

// eslint-disable-next-line react/prop-types
const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={crTheme}>{children}</ThemeProvider>
);

export default ThemeWrapper;
