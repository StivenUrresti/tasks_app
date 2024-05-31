import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {StackNavigation} from './navigation/stackNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Loading} from './components/Loading';

export function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Loading />
        <StackNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
