/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */

import {AppRegistry, StyleSheet} from 'react-native';
import {name as appName} from './app.json';
import {App} from '@/App';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Application = () => (
  <SafeAreaProvider style={styles.styles}>
    <App />
  </SafeAreaProvider>
);

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
AppRegistry.registerComponent(appName, () => Application);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
