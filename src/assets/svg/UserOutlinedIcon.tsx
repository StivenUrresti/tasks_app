import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

export const UserOutlinedIcon = ({size = 24, color = '#878787'}: Props) => {
  return (
    <Svg
      width={size}
      height={size}
      stroke={color}
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <Path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </Svg>
  );
};
