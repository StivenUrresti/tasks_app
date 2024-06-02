import React, {useState} from 'react';
import {Button, CustomInput, ModalAlert} from '@/components';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text, TouchableOpacity, View} from 'react-native-ui-lib';
import {BackArrowIcon, EmailIcon, EyeOffIcon, PadLockIcon} from '@/assets/svg';
import {RootStackRoutes, RootStackScreenProps} from '@/types/stackRoutes';
import {theme} from '@/theme/theme';
import {EyeIcon} from '@/assets/svg/EyeIcon';
import {useActionSignUp} from './useActionSignUp';
import {images} from '@/assets/img';
import _ from 'lodash';

export const RegisterScreen = (
  props: RootStackScreenProps<RootStackRoutes.REGISTER>,
) => {
  const {navigation} = props;
  const {
    control,
    errors,
    modalSuccess,
    modalError,
    isValid,
    dirtyFields,
    toggleModalError,
    toggleModalSuccess,
    handleSignUp,
  } = useActionSignUp();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => navigation.pop()}>
        <BackArrowIcon />
      </TouchableOpacity>
      <View paddingH-16 marginT-20>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.subTitle}>
          Register with social or fill the form to continue
        </Text>
        <View paddingT-32 marginB-20>
          <Text style={styles.labelTitle}>Email</Text>
          <CustomInput
            placeholder="Email"
            name="email"
            control={control}
            hasError={!!errors?.email}
            validationMessage={errors?.email?.message}
            trailingIcon={<EmailIcon />}
          />
          <Text style={styles.labelTitle}>User name</Text>
          <CustomInput
            placeholder="User name"
            name="username"
            control={control}
            hasError={!!errors?.username}
            validationMessage={errors?.username?.message}
          />
          <Text style={styles.labelTitle}>Password</Text>
          <CustomInput
            placeholder="Password"
            name="password"
            control={control}
            secureTextEntry={!showPassword}
            hasError={!!errors?.password}
            validationMessage={errors?.password?.message}
            leadingIcon={<PadLockIcon />}
            trailingIcon={showPassword ? <EyeOffIcon /> : <EyeIcon />}
            onPressIcon={() => setShowPassword(!showPassword)}
          />
        </View>
        <Button
          backgroundColor={theme.PRIMARY_COLOR}
          label="Continue"
          textColor="white"
          onPress={handleSignUp}
          disabled={!isValid || _.isEmpty(dirtyFields)}
        />
        <TouchableOpacity
          center
          marginT-10
          paddingB-24
          onPress={() => navigation.navigate(RootStackRoutes.LOGIN)}>
          <Text style={styles.textAccount} marginT-12>
            You have an account? <Text style={styles.textLogin}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <ModalAlert
        modalVisible={modalSuccess}
        buttonText="Go login"
        title="Your account was created successfully"
        img={images.ALERT_SUCCESS}
        handleNavigation={() =>
          props.navigation.navigate(RootStackRoutes.LOGIN)
        }
        hasError={false}
        toggleModal={toggleModalSuccess}
      />
      <ModalAlert
        modalVisible={modalError}
        buttonText="Try again"
        title="An error occurred creating the account"
        img={images.ALERT_ERROR}
        toggleModal={toggleModalError}
        hasError
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BACKGROUND_SCREEN_COLOR,
  },
  content: {
    padding: 16,
  },
  title: {
    color: theme.PRIMARY_COLOR,
    fontSize: 32,
    fontWeight: '600',
  },
  subTitle: {
    color: theme.SECONDARY_TEXT_COLOR,
    fontSize: 14,
  },
  labelTitle: {
    color: theme.SECONDARY_TEXT_COLOR,
    fontSize: 14,
    marginVertical: 10,
    fontWeight: '600',
  },
  textAccount: {
    color: theme.SECONDARY_TEXT_COLOR,
    fontSize: 18,
    fontWeight: '600',
  },
  textLogin: {
    color: theme.LINKS_COLOR,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  checkbox: {
    alignSelf: 'center',
    color: 'red',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginTop: 10,
  },
});
