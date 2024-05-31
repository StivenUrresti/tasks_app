import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const ArrowBackIcon = ({
  width = 24,
  height = 24,
  color = '#000',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z"
      />
    </Svg>
  );
};
