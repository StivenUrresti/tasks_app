import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const RadioButtonCheckIcon = ({
  width = 24,
  height = 24,
  color = '#929292',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Circle cx="10" cy="10" r="10" fill={color} />
      <Path
        d="M14.4446 6.66666L8.33344 12.7778L5.55566 10"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
