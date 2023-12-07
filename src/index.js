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
    primaryText: 'rosybrown',
    titleText: 'white',
    subTitleText: 'white',
    accentText: '#f3baba',
    accentIcon: 'black',
    primaryBckg: 'rosybrown',
    secondBckg: 'rgba(0, 0, 0, 0.6)',
    lightBckg: 'rgba(255, 255, 255, 0.8)',
    accentBckg: 'rgba(255, 169, 169, 0.8)',
  },
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
