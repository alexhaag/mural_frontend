import React from 'react';
import firebase from './auth/firebase';
import SignUp from './pages/SignUp';
//import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

//import Routes from './routes';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignUp />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
