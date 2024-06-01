import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuthProvider} from '@/context/AuthContext';

export const ProfileScreen = () => {
  const {user} = useAuthProvider();
  return (
    <SafeAreaView>
      <Text>ProfileScreen</Text>
      <TouchableOpacity
        onPress={() => {
          AsyncStorage.removeItem('dataUser');
        }}>
        <Text>cerrar sesión</Text>
        <Text>{user?.email}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
