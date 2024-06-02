import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList, RootStackRoutes} from '@/types/stackRoutes';
import {LoginScreen, RegisterScreen, WelcomeScreen} from '@/screens';
import {TabsNavigation} from './tabNavigation';
import {useAuthProvider} from '@/context/AuthContext';
import {View} from 'react-native-ui-lib';
import {Text} from '@react-native-material/core';
import {theme} from '@/theme/theme';

const Stack = createStackNavigator<RootStackParamList>();

export function StackNavigation() {
  const {isLoading, isAuthenticated} = useAuthProvider();
  if (isLoading) {
    return (
      <View flex-1 center>
        <Text variant="h4" color={theme.PRIMARY_DARK_COLOR}>
          Task master.
        </Text>
      </View>
    );
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name={RootStackRoutes.TABS_HOME}
            component={TabsNavigation}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name={RootStackRoutes.WELCOME}
            component={WelcomeScreen}
          />
          <Stack.Screen name={RootStackRoutes.LOGIN} component={LoginScreen} />
          <Stack.Screen
            name={RootStackRoutes.REGISTER}
            component={RegisterScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
