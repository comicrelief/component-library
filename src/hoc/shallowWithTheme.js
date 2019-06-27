import React from 'react';
import renderer from 'react-test-renderer';
import { crTheme } from '../index';
import ThemeProvider from '../theme/ThemeProvider';

export default function renderWithTheme(component) {
  return renderer.create(
    <ThemeProvider theme={crTheme}>{component}</ThemeProvider>
  );
}
