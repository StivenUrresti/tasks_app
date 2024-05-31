import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

export const HomeOutlinedIcon = ({size = 24, color = '#878787'}: Props) => {
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
      <Path d="M5 12l-2 0l9 -9l9 9l-2 0" />
      <Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
      <Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
    </Svg>
  );
};
