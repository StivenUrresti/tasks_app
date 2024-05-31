import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const CalendarIcon = ({
  width = 24,
  height = 24,
  color = '#000',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m0 16H5V9h14zm0-12H5V5h14M7 11h5v5H7"
      />
    </Svg>
  );
};
