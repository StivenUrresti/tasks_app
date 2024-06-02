import React from 'react';
import {taskEntity} from '@/api/task/entities/taskEntity';
import {TouchableOpacity} from 'react-native-ui-lib';
import {Text} from '@react-native-material/core';
import {theme} from '@/theme/theme';
import {StyleSheet} from 'react-native';

interface IRenderItemProps {
  item: taskEntity;
}

export const RenderItem = ({item}: IRenderItemProps) => {
  return (
    <TouchableOpacity style={styles.container} marginV-8 padding-16>
      <Text style={styles.title}>{item.title}</Text>
      {item.status === 'not_done' ? (
        <Text style={styles.status}>pendiente</Text>
      ) : (
        <Text style={styles.status}>completada</Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: theme.WHITE,
    marginBottom: 8,
  },
  container: {
    backgroundColor: theme.FILL_QUIZZES_QUESTION_CARD,
    borderRadius: 16,
  },
  status: {
    color: theme.SECONDARY_COLOR,
    fontSize: 16,
  },
});
