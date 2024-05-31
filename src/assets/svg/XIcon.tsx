import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  onPress?: () => void;
}

export const XIcon = ({size = 24, color = '#878787', onPress}: Props) => {
  return (
    <Svg
      onPress={onPress}
      width={size}
      height={size}
      color={color}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M18 6L6 18" />
      <Path d="M6 6L18 18" />
    </Svg>
  );
};
