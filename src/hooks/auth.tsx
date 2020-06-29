import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';
import firebase from '../auth/firebase';
import 'firebase/auth';

interface AuthState {
  currentUser: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  currentUser: object;
  signIn(creadentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(() => setCurrentUser);
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
