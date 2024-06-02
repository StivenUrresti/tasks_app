import React from 'react';
import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BackArrowIcon} from '@/assets/svg';
import {RootStackRoutes, RootStackScreenProps} from '@/types/stackRoutes';
import {useActions} from './useActions';
import {CustomInput} from '@/components';
import {Button, Text, View} from 'react-native-ui-lib';
import {Controller} from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';
import {theme} from '@/theme/theme';
import _ from 'lodash';

export const AddTaskScreen = (
  props: RootStackScreenProps<RootStackRoutes.ADD_TASK>,
) => {
  const {
    dataCategories,
    control,
    errors,
    dirtyFields,
    isValid,
    handleCreateTask,
  } = useActions();
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      <View flex paddingH-16>
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.pop()}>
          <BackArrowIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Añadir Tarea</Text>

        <View marginV-20>
          <Text style={styles.label}>titulo</Text>
          <CustomInput
            placeholder="Enter task title"
            name="title"
            hasError={!!errors?.title}
            control={control}
            validationMessage={errors?.title?.message}
          />
        </View>

        <View marginV-20>
          <Text style={styles.label}>Descripción</Text>
          <CustomInput
            placeholder="Enter task description"
            name="description"
            hasError={!!errors?.description}
            control={control}
            validationMessage={errors?.description?.message}
          />
        </View>

        <View height={30}>
          <Text style={styles.label}>selecciona a categoría</Text>
          {dataCategories ? (
            <Controller
              control={control}
              name="categoryId"
              render={({field: {onChange, value}}) => (
                <Picker selectedValue={value} onValueChange={onChange}>
                  {dataCategories.map(e => (
                    <Picker.Item key={e.id} label={e.name} value={e.id} />
                  ))}
                </Picker>
              )}
            />
          ) : (
            <Text style={styles.errorText}>No categories</Text>
          )}
        </View>
        <Button
          backgroundColor={theme.SECONDARY_COLOR}
          label="crear tarea"
          onPress={() => handleCreateTask(navigation)}
          style={styles.button}
          disabled={_.isEmpty(dirtyFields) || !isValid}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginVertical: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginTop: 8,
  },
  button: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 80 : 100,
    width: '90%',
    alignSelf: 'center',
  },
});
