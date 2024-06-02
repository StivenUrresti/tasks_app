import {Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {RootStackRoutes, RootStackScreenProps} from '@/types/stackRoutes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BackArrowIcon} from '@/assets/svg';

export const AddCategoryScreen = (
  props: RootStackScreenProps<RootStackRoutes.ADD_TASK>,
) => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.header} onPress={() => navigation.pop()}>
        <BackArrowIcon />
      </TouchableOpacity>
      <Text>Add category</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});
