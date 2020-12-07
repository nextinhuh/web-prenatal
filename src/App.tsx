import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';

import Routes from './routes';
import firebaseConfig from './config/FirebaseConfig';
import AppContextProvider from './hooks';

import GlobalStyles from './styles/global';

firebase.initializeApp(firebaseConfig);

const App: React.FC = () => (
  <Router>
    <AppContextProvider>
      <Routes />
      <GlobalStyles />
    </AppContextProvider>
  </Router>
);

export default App;
