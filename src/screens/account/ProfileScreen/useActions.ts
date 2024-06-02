import {useAuthProvider} from '@/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useActions = () => {
  const {user, checkUserIsAuth, setIsLoading, setIsAuthenticated} =
    useAuthProvider();
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('dataUser');
      await setIsLoading(true);
      await setIsAuthenticated(false);
      await checkUserIsAuth();
    } catch (error) {
      await setIsLoading(false);
    }
  };
  return {user, handleLogout};
};
