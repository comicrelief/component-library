import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';

export default class ThemeWrapper extends Component {
  render() {
      console.log('teteem',theme);
    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}
