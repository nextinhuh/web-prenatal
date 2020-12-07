import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { FirestoreProvider } from '@react-firebase/firestore';

import Routes from './routes';
import firebaseConfig from './config/FirebaseConfig';

import GlobalStyles from './styles/global';

firebase.initializeApp(firebaseConfig);

const App: React.FC = () => (
  <Router>
    <Routes />
    <GlobalStyles />
  </Router>
);

export default App;
