import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from './theme/ThemeProvider';
import crTheme from './theme/crTheme/theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={crTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
