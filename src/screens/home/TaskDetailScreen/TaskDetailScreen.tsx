import React from 'react';
import {Text, SafeAreaView, StyleSheet, Platform} from 'react-native';
import {RootStackRoutes, RootStackScreenProps} from '@/types/stackRoutes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BackArrowIcon} from '@/assets/svg';
import {View} from 'react-native-ui-lib';
import {useActions} from './useActions';
import {Button, CustomInput} from '@/components';
import {theme} from '@/theme/theme';
import _ from 'lodash';

export const TaskDetailScreen = (
  props: RootStackScreenProps<RootStackRoutes.TASK_DETAIL>,
) => {
  const {route, navigation} = props;
  const {taskId} = route.params;
  const {control, errors, isValid, dirtyFields, handleUpdateTask} =
    useActions(taskId);

  return (
    <SafeAreaView style={styles.container}>
      <View flex-1 paddingH-16>
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.pop()}>
          <BackArrowIcon />
        </TouchableOpacity>
        <View marginV-20>
          <Text style={styles.label}>Title</Text>
          <CustomInput
            placeholder="Enter task title"
            name="title"
            hasError={!!errors?.title}
            control={control}
            validationMessage={errors?.title?.message}
          />
        </View>

        <View marginV-20>
          <Text style={styles.label}>Description</Text>
          <CustomInput
            placeholder="Enter task description"
            name="description"
            hasError={!!errors?.description}
            control={control}
            validationMessage={errors?.description?.message}
          />
        </View>
        <Button
          backgroundColor={theme.YELLOW}
          label="actualizar tarea"
          onPress={() => handleUpdateTask(navigation)}
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
    backgroundColor: theme.BACKGROUND_SCREEN_COLOR,
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
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
