import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const PlusIcon = ({
  width = 24,
  height = 24,
  color = '#878787',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.5"
        d="M12 6v12m-6-6h12"
      />
    </Svg>
  );
};
