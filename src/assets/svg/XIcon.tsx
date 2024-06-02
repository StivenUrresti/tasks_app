import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

export const XIcon = ({size = 24, color = '#878787'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m7 7l10 10M7 17L17 7"
      />
    </Svg>
  );
};
