import React, {useState} from 'react';
import {TouchableOpacity, Checkbox} from 'react-native-ui-lib';
import {Text} from '@react-native-material/core';
import {theme} from '@/theme/theme';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackRoutes} from '@/types/stackRoutes';
import {useUpdateTaskStatusMutation} from '@/api/task/taskApi';
import {taskEntity} from '@/api/task/entities/taskEntity';
import {useAuthProvider} from '@/context/AuthContext';

interface IRenderItemProps {
  item: taskEntity;
}

export const RenderItem = ({item}: IRenderItemProps) => {
  const navigation = useNavigation();
  const {user} = useAuthProvider();
  const [isChecked, setIsChecked] = useState(item.status === 'done');
  const [updateStatus] = useUpdateTaskStatusMutation();

  const handleStatusUpdate = async (newStatus: 'done' | 'not_done') => {
    setIsChecked(newStatus === 'done'); // Actualizar el estado local primero

    try {
      await updateStatus({
        taskId: item.id,
        userId: user?.id as number,
        status: newStatus,
      });
    } catch (error) {
      console.error('Error updating task status:', error);
      // Si hay un error, revertir el estado local
      setIsChecked(!isChecked);
    }
  };

  const handlePress = () => {
    navigation.navigate(RootStackRoutes.TASK_DETAIL, {
      taskId: item.id,
    });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      marginV-8
      padding-16
      onPress={handlePress}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text
          style={[
            styles.status,
            {
              color:
                item.status === 'not_done'
                  ? theme.PRIMARY_TEXT_COLOR
                  : theme.LINKS_COLOR,
            },
          ]}>
          {item.status === 'not_done' ? 'pendiente' : 'completada'}
        </Text>
      </View>
      <Checkbox
        color={theme.LINKS_COLOR}
        value={isChecked}
        onValueChange={() =>
          handleStatusUpdate(isChecked ? 'not_done' : 'done')
        }
        containerStyle={styles.checkbox}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.GRAY_300,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.WHITE,
    marginBottom: 8,
  },
  status: {
    fontSize: 18,
  },
  checkbox: {
    marginRight: 16,
  },
});
