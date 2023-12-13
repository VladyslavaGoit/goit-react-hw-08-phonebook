import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'Components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primaryText: '#000000',
    secondaryText: '#7a7a7a',
    titleText: '#494848',
    subTitleText: '#B4B4B4',
    accentText: '#F3C653',
    accentIcon: 'black',
    primaryBckg: '#FFFEF9',
    secondBckg: '#242424',
    lightBckg: '#E8E8E1',
    accentBckg: '#F3C653',
  },
  breakpoint: '767px',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
