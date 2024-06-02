import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {useActions} from './useActions';
import {View} from 'react-native-ui-lib';
import {Text} from '@react-native-material/core';
import {theme} from '@/theme/theme';
import {Button} from '@/components';
import {FAQsIcon} from '@/assets/svg';

export const ProfileScreen = () => {
  const {user, handleLogout} = useActions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <FAQsIcon />
        </TouchableOpacity>
      </View>
      <View flex paddingH-16 paddingT-30>
        <Text style={styles.textName}>{user?.username}</Text>
        <Text style={styles.info}>{user?.email || 'stive@gmail.com'}</Text>
        <Button
          backgroundColor={theme.SECONDARY_COLOR}
          label="Sign Out"
          onPress={handleLogout}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BACKGROUND_SCREEN_COLOR,
  },
  textName: {
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
    color: theme.SECONDARY_COLOR,
  },
  info: {
    fontSize: 18,
    color: theme.SECONDARY_TEXT_COLOR,
    textAlign: 'center',
    marginBottom: 14,
  },
  imageProfile: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  cityText: {
    fontSize: 20,
    color: theme.SECONDARY_COLOR,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '500',
  },
  button: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 80 : 100,
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    padding: 16,
    alignItems: 'flex-end',
  },
});
