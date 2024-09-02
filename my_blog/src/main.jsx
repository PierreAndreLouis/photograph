import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Importations nécessaires pour la gestion de l'état et du thème
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './redux/theme/ThemeProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
// npm install react - helmet - async


// Création du point d'entrée de l'application React
ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  </PersistGate>,
);
