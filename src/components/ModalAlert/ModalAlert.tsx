import {
  Modal,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from '@react-native-material/core';
import {BackArrowIcon} from '@/assets/svg';
import {View} from 'react-native-ui-lib';
import {Button} from '../Button';
import {theme} from '@/theme/theme';

interface Props {
  modalVisible: boolean;
  buttonText: string;
  title: string;
  img: ImageSourcePropType | undefined;
  toggleModal?: () => void;
  hasError: boolean;
  handleNavigation?: () => void;
}

export const ModalAlert = ({
  modalVisible,
  title,
  img,
  hasError,
  buttonText,
  toggleModal,
  handleNavigation,
}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}>
      <SafeAreaView style={styles.modalContainer}>
        <View flex-1 paddingH-20>
          {hasError && (
            <TouchableOpacity style={styles.tryAgain} onPress={toggleModal}>
              <BackArrowIcon />
              <Text>Try again</Text>
            </TouchableOpacity>
          )}
          <View style={styles.modalContent}>
            <Image style={styles.image} source={img} alt="img_alert" />
            <Text style={styles.title}>{title}</Text>
            {hasError ? null : (
              <Button
                label={buttonText}
                onPress={handleNavigation}
                backgroundColor={theme.PRIMARY_COLOR}
                textColor={theme.WHITE}
                style={styles.button}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: theme.BACKGROUND_SCREEN_COLOR,
  },
  modalContent: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.BLACK,
  },
  tryAgain: {
    fontSize: 16,
    color: theme.ACCENT_COLOR,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  button: {
    position: 'absolute',
    bottom: 18,
    width: '100%',
  },
});
