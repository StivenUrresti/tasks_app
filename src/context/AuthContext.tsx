/* eslint-disable react-hooks/exhaustive-deps */
import {userEntity} from '@/api/user/entities/usersEntity';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IAuthContext {
  user: userEntity | undefined | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setIsLoading(isLoading: boolean): void;
  setIsAuthenticated(isAuthenticated: boolean): void;
  checkUserIsAuth(): void;
  saveDataUser: (data: userEntity) => Promise<void>;
  getDataUser: () => Promise<userEntity | null>;
}

const AuthContext = createContext<undefined | IAuthContext>(undefined);

export function AuthProvider({children}: {children: ReactNode}) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<userEntity | undefined | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkUserIsAuth();
  }, []);

  const saveDataUser = async (data: userEntity) => {
    try {
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('dataUser', jsonData);
    } catch (error) {
      console.log('Error al guardar la dataUser:', error);
    }
  };

  const getDataUser = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('dataUser');
      return jsonData ? JSON.parse(jsonData) : null;
    } catch (error) {
      console.log('Error al obtener el dataUser:', error);
      return null;
    }
  };

  const checkUserIsAuth = async () => {
    try {
      setIsLoading(true);
      const data = await getDataUser();

      if (data) {
        setIsAuthenticated(true);
        setUser(data);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Error en la autenticación del usuario:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        setIsLoading,
        setIsAuthenticated,
        checkUserIsAuth,
        saveDataUser,
        getDataUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthProvider() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('Auth provider');
  }
  return context;
}
