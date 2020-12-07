import React, { createContext, useCallback, useContext, useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

interface SignInCredentials {
  email: string;
  password: string;
}

interface User {
  name: string | null;
  email: string | null;
  photoUrl: string | null;
  uid: string | null;
}

interface AuthContextData {
  userStatus: User;
  signIn(crendentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [userStatus, setUserStatus] = useState<User>(() => {
    const user = localStorage.getItem('@Cegonha:user');

    if (user) {
      return JSON.parse(user);
    }

    return false;
  });
  const dbFirestore = firebase.firestore();

  const signIn = useCallback(
    async ({ email, password }) => {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (response.user?.displayName === null) {
        let userName: any;
        await dbFirestore
          .collection('users')
          .doc(response.user?.uid)
          .get()
          .then(result => {
            if (result.exists) {
              userName = result.data();
            }
          });
        await firebase.auth().currentUser?.updateProfile({
          displayName: userName.name,
        });
      }

      if (response.user) {
        const user = {
          name: response.user.displayName,
          email: response.user.email,
          photoUrl: response.user.photoURL,
          uid: response.user.uid,
        };

        localStorage.setItem('@Cegonha:user', JSON.stringify(user));

        setUserStatus(user);
      }
    },
    [dbFirestore],
  );

  const signOut = useCallback(async () => {
    await firebase.auth().signOut();

    localStorage.removeItem('@Cegonha:user');
    setUserStatus({} as User);
  }, []);

  return (
    <AuthContext.Provider value={{ userStatus, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('userAuth must be used within an AuthProvider');
  }

  return context;
}
