import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { store, persistor } from './app/store.js'; // Corrected import paths
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </PersistGate>,
  document.getElementById('root')
);
