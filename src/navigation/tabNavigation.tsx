/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen} from '@/screens';
import {TabsHomeParamList, TabsHomeRoutes} from '@/types/tabsRoutes';
import {theme} from '@/theme/theme';
import {CustomTabBar} from './CustomTabBar';

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
      tabBar={props => <CustomTabBar {...props} />}
      initialRouteName={TabsHomeRoutes.HOME}>
      <Tab.Screen name={TabsHomeRoutes.HOME} component={HomeScreen} />
      <Tab.Screen name={TabsHomeRoutes.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
