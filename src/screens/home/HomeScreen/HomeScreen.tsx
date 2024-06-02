import {Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {useActions} from './useActions';
import {theme} from '@/theme/theme';
import {View} from 'react-native-ui-lib';

export const HomeScreen = () => {
  const {dataTasks} = useActions();
  return (
    <SafeAreaView style={styles.container}>
      <View flex-1 paddingH-16>
        <Text style={styles.title}>listado de tareas </Text>
        <FlatList
          data={dataTasks}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View paddingV-16>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: theme.PRIMARY_DARK_COLOR,
  },
});
