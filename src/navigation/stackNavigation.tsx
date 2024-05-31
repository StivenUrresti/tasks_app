import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList, RootStackRoutes} from '@/types/stackRoutes';
import {LoginScreen, WelcomeScreen} from '@/screens';
import {TabsNavigation} from './tabNavigation';

const Stack = createStackNavigator<RootStackParamList>();

export function StackNavigation() {
  const isAuthenticated = false;
  // if (isLoading) {
  //   return (
  //     <View>
  //       <Text>loading..</Text>
  //     </View>
  //   );
  // }
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
        </>
      )}
    </Stack.Navigator>
  );
}
