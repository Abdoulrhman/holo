import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';

import { AppProvider } from './context/appContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import store from './store';
import { LangProvider } from './context/langContext';
import { ThemeProvider } from './context/themeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistStore(store)}
        >
          <AppProvider>
            <ThemeProvider>
              <LangProvider>
                <App />
              </LangProvider>
            </ThemeProvider>
          </AppProvider>
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
