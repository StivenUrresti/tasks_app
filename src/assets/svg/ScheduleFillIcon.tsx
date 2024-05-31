import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const ScheduleFillIcon = ({
  width = 24,
  height = 24,
  color = '#878787',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M4 2a1 1 0 0 0-1 1v2h2v2H2v2h3v2H2v2h3v2H2v2h3v2H3v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm5 14a3 3 0 1 1 6 0zm3-4a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
      />
    </Svg>
  );
};
