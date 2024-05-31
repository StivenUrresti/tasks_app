import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileScreen} from '@/screens';
import {TabsHomeParamList, TabsHomeRoutes} from '@/types/tabsRoutes';
import {theme} from '@/theme/theme';

const Tab = createBottomTabNavigator<TabsHomeParamList>();

export function TabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.PRIMARY_COLOR,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}
      initialRouteName={TabsHomeRoutes.PROFILE}>
      <Tab.Screen name={TabsHomeRoutes.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
