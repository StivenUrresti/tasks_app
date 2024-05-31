import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Text} from '@react-native-material/core';
import {theme} from '@/theme/theme';
import {View} from 'react-native-ui-lib';

export const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={{
          uri: 'https://www.stelorder.com/wp-content/uploads/2023/04/portada-mejores-gestores-tareas.jpg',
        }}>
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>¡Bienvenido a TaskMaster! 🎉</Text>
          <Text style={styles.spamText}>
            Gestiona tus tareas de manera fácil y eficiente. ¡Estamos aquí para
            ayudarte a ser más productivo! 💪
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.WHITE,
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme.PRIMARY_COLOR,
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '100%',
  },
  textButton: {
    color: theme.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  spamText: {
    color: theme.WHITE,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
