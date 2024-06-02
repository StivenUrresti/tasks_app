import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {RootStackRoutes, RootStackScreenProps} from '@/types/stackRoutes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BackArrowIcon} from '@/assets/svg';
import {Button, View} from 'react-native-ui-lib';
import {CustomInput} from '@/components';
import {useActions} from './useAction';
import {Text} from '@react-native-material/core';
import {theme} from '@/theme/theme';
import _ from 'lodash';

export const AddCategoryScreen = (
  props: RootStackScreenProps<RootStackRoutes.ADD_CATEGORY>,
) => {
  const {navigation} = props;
  const {control, errors, isValid, dirtyFields, handleCreateCategory} =
    useActions();
  return (
    <SafeAreaView style={styles.container}>
      <View paddingH-16>
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.pop()}>
          <BackArrowIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Agregar categoría</Text>
        <View marginV-20>
          <Text style={styles.label}>nombre de la categoría</Text>
          <CustomInput
            placeholder="Enter task name"
            name="name"
            hasError={!!errors?.name}
            control={control}
            validationMessage={errors?.name?.message}
          />
        </View>
      </View>
      <Button
        backgroundColor={theme.YELLOW}
        label="crear categoría"
        onPress={() => handleCreateCategory(navigation)}
        style={styles.button}
        disabled={_.isEmpty(dirtyFields) || !isValid}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BACKGROUND_SCREEN_COLOR,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginVertical: 20,
  },
  button: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 80 : 100,
    width: '90%',
    alignSelf: 'center',
  },
});
