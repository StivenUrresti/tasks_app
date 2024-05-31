import React from 'react';
import {RootStackRoutes, RootStackScreenProps} from '@/types/stackRoutes';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from '@react-native-material/core';
import {View} from 'react-native-ui-lib';
import {theme} from '@/theme/theme';
import {BackArrowIcon, EyeOffIcon, LockIcon, UserIcon} from '@/assets/svg';
import {EyeIcon} from '@/assets/svg/EyeIcon';
import _ from 'lodash';
import {useActions} from './useActions';
import {Button, CustomInput} from '@/components';

export const LoginScreen = (
  props: RootStackScreenProps<RootStackRoutes.LOGIN>,
) => {
  const {navigation} = props;
  const {
    control,
    showPassWord,
    dirtyFields,
    errors,
    isValid,
    toggleShowPassword,
  } = useActions();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => navigation.pop()}>
        <BackArrowIcon />
      </TouchableOpacity>
      <View marginT-40 marginB-40>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Please sign in to your account </Text>
      </View>
      <Text style={styles.subtitle}>Username</Text>
      <CustomInput
        leadingIcon={<UserIcon />}
        placeholder="username"
        name="username"
        hasError={!!errors?.username}
        control={control}
        validationMessage={errors?.username?.message}
      />
      <Text style={styles.subtitle}>Password</Text>
      <CustomInput
        leadingIcon={<LockIcon />}
        trailingIcon={showPassWord ? <EyeIcon /> : <EyeOffIcon />}
        placeholder="password"
        name="password"
        secureTextEntry={!showPassWord}
        control={control}
        hasError={!!errors?.password}
        onPressIcon={toggleShowPassword}
        validationMessage={errors?.password?.message}
      />
      <View marginT-70>
        <Button
          backgroundColor={theme.PRIMARY_COLOR}
          label="Continue"
          textColor="white"
          onPress={() => {}}
          disabled={_.isEmpty(dirtyFields) || !isValid}
        />
        <View marginT-20>
          <TouchableOpacity>
            <Text style={styles.spamText}>
              Don't have an account?
              <Text style={{color: theme.LINKS_COLOR}}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BACKGROUND_SCREEN_COLOR,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.PRIMARY_COLOR,
  },
  input: {
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 16,
    color: theme.SECONDARY_TEXT_COLOR,
    marginVertical: 14,
  },
  forgotText: {
    textAlign: 'center',
    marginVertical: 18,
  },
  spamText: {
    fontSize: 18,
    color: theme.SECONDARY_TEXT_COLOR,
    textAlign: 'center',
    marginVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  textError: {
    color: theme.ERROR_COLOR,
    fontSize: 18,
    marginVertical: 10,
  },
});
