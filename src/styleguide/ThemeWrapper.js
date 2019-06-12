import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { crTheme } from '../index';

export default class ThemeWrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={crTheme}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}
