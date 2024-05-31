import React from 'react';
import {View, Modal, ActivityIndicator, StyleSheet} from 'react-native';
import {useAppSelector} from '@/hooks/useRedux';
import {selectLoading} from '@/slices/loadingSlice';
import {Text} from 'react-native-ui-lib';
import {theme} from '@/theme/theme';

export const Loading = () => {
  const {visibleLoading} = useAppSelector(selectLoading);

  return (
    <Modal visible={visibleLoading} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View>
          <Text style={styles.loadingText}>Loading...</Text>
          <ActivityIndicator size="large" color={theme.WHITE} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loadingText: {
    marginVertical: 20,
    fontSize: 18,
    color: theme.WHITE,
  },
});
