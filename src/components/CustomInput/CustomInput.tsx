import {Platform, StyleSheet, TextInput, TextInputProps} from 'react-native';
import {TouchableOpacity, View} from 'react-native-ui-lib';
import React from 'react';
import {Text} from '@react-native-material/core';
import {theme} from '@/theme/theme';
import {Controller} from 'react-hook-form';

interface ICustomInputProps {
  name: string;
  control?: any;
  placeholder?: string;
  secureTextEntry?: boolean;
  hasError?: boolean | undefined;
  validationMessage?: string;
  showCounter?: boolean;
  maxLength?: number;
  backgroundColor?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  radius?: number;
  borderColor?: string;
  style?: TextInputProps['style'];
  onPressIcon?: () => void;
}

/**
 * Renders a custom input component with optional leading and trailing icons, error validation, and character counter.
 *
 * @param {ICustomInputProps} props - The props object containing the following properties:
 *   - name: The name of the input field.
 *   - control: The control object from react-hook-form.
 *   - placeholder: The placeholder text for the input field.
 *   - secureTextEntry: Whether the input field should hide the entered text.
 *   - validationMessage: The error message to display if validation fails.
 *   - hasError: Whether the input field has an error.
 *   - maxLength: The maximum length of the input field.
 *   - showCounter: Whether to display the character counter.
 *   - backgroundColor: The background color of the input field container.
 *   - leadingIcon: A function that returns the leading icon component.
 *   - trailingIcon: A function that returns the trailing icon component.
 *   - onPressIcon: A function to handle the press event of the icon components.
 *   - radius: The radius of the input field container.
 *   - borderColor: The border color of the input field container.
 *   - style: The style object for the input field.
 * @param {TextInputProps} props - The props object for the TextInput component.
 * @return {JSX.Element} The custom input component.
 *
 * @example
 *  <CustomInput
      name="search"
      hasError={!!errors?.search}
      validationMessage={errors?.search?.message}
      control={control}
      backgroundColor={theme.GRAY_02}
      leadingIcon={() => <Icon />}
    />
 */
export const CustomInput = (
  {
    name,
    control = undefined,
    placeholder,
    secureTextEntry = false,
    validationMessage,
    hasError,
    maxLength,
    showCounter,
    backgroundColor,
    leadingIcon,
    trailingIcon,
    radius = 8,
    borderColor = theme.GRAY_300,
    style,
    onPressIcon,
  }: ICustomInputProps,
  {...props}: TextInputProps,
) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <View width="100%">
          <View
            row
            centerV
            backgroundColor={backgroundColor || theme.WHITE}
            padding-12={Platform.OS === 'ios'}
            paddingH-16={Platform.OS !== 'ios'}
            style={[
              style,
              styles.mainContainer,
              {
                borderColor: hasError ? theme.ERROR_COLOR : borderColor,
                borderRadius: radius,
              },
            ]}>
            {leadingIcon && leadingIcon}

            <View style={[styles.input]}>
              <TextInput
                {...props}
                value={value}
                maxLength={maxLength}
                secureTextEntry={secureTextEntry}
                numberOfLines={1}
                placeholder={placeholder}
                onBlur={onBlur}
                autoCapitalize="none"
                onChangeText={onChange}
                placeholderTextColor={theme.INFO_COLOR}
                style={{color: theme.BLACK}}
              />
            </View>
            {trailingIcon && (
              <TouchableOpacity onPress={onPressIcon}>
                {trailingIcon}
              </TouchableOpacity>
            )}
          </View>
          <View row spread padding-4>
            <View>
              {hasError && validationMessage && (
                <Text color={theme.ERROR_COLOR}>{validationMessage}</Text>
              )}
            </View>
            {showCounter && (
              <Text color={theme.BLACK}>
                {value?.length || 0}
                {maxLength && `/ ${maxLength}`}
              </Text>
            )}
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    gap: 8,
    borderWidth: 2,
  },
  input: {
    flex: 1,
  },
});
