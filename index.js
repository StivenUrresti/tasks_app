/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */

import {AppRegistry, StyleSheet} from 'react-native';
import {name as appName} from './app.json';
import {App} from '@/App';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from '@/libraries';

const Application = () => (
  <Provider store={store}>
    <SafeAreaProvider style={styles.styles}>
      <App />
    </SafeAreaProvider>
  </Provider>
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
