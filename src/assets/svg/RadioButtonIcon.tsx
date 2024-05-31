import React from 'react';
import Svg, {Circle} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const RadioButtonIcon = ({
  width = 24,
  height = 24,
  color = '#E7E7E7',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Circle cx="10" cy="10" r="9.5" stroke={color} />
    </Svg>
  );
};
