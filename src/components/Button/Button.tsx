import {
  AnimatableNumericValue,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-ui-lib';
import {Text} from '@react-native-material/core';
import {theme} from '@/theme/theme';

interface Props {
  label: string;
  disabled?: boolean;
  backgroundColor?: string;
  padding?: number;
  textColor?: string;
  fullWidth?: boolean;
  borderRadius?: AnimatableNumericValue | undefined;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const Button = (props: Props) => {
  const {
    label,
    onPress,
    disabled = false,
    backgroundColor = theme.PRIMARY_COLOR,
    textColor = theme.WHITE,
    fullWidth = false,
    borderRadius,
    padding = 12,
    iconLeft,
    iconRight,
    style,
  } = props;
  return (
    <TouchableOpacity
      row
      center
      onPress={onPress}
      backgroundColor={disabled ? theme.GRAY_300 : backgroundColor}
      disabled={disabled}
      style={[
        style,
        {
          borderRadius: borderRadius || 24,
          padding,
        },
        fullWidth && styles.container,
      ]}>
      {iconLeft}
      <Text
        color={disabled ? theme.WHITE : textColor}
        style={[
          iconLeft ? styles.iconLeft : {},
          iconRight ? styles.iconRight : {},
        ]}>
        {label}
      </Text>
      {iconRight}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  iconLeft: {
    marginRight: 4,
  },

  iconRight: {
    marginLeft: 4,
  },
});
