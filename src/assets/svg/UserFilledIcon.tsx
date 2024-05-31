import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

export const UserFilledIcon = ({size = 24, color = '#878787'}: Props) => {
  return (
    <Svg width={size} height={size} fill={color}>
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
      <Path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
    </Svg>
  );
};
