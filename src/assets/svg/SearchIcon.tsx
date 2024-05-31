import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  strokeWidth?: number;
  color?: string;
}

export const SearchIcon = ({
  width = 24,
  height = 24,
  strokeWidth = 2,
  color = '#000000',
}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      strokeWidth={strokeWidth}
      stroke={color}>
      <Path
        d="M3.24512 10C3.24512 10.9193 3.41859 11.8295 3.75563 12.6788C4.09268 13.5281 4.58669 14.2997 5.20947 14.9497C5.83224 15.5998 6.57158 16.1154 7.38528 16.4672C8.19897 16.8189 9.07108 17 9.95182 17C10.8326 17 11.7047 16.8189 12.5184 16.4672C13.3321 16.1154 14.0714 15.5998 14.6942 14.9497C15.317 14.2997 15.811 13.5281 16.148 12.6788C16.4851 11.8295 16.6585 10.9193 16.6585 10C16.6585 9.08075 16.4851 8.1705 16.148 7.32122C15.811 6.47194 15.317 5.70026 14.6942 5.05025C14.0714 4.40024 13.3321 3.88463 12.5184 3.53284C11.7047 3.18106 10.8326 3 9.95182 3C9.07108 3 8.19897 3.18106 7.38528 3.53284C6.57158 3.88463 5.83224 4.40024 5.20947 5.05025C4.58669 5.70026 4.09268 6.47194 3.75563 7.32122C3.41859 8.1705 3.24512 9.08075 3.24512 10Z"
        stroke="#10B981"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M20.4908 21L14.7422 15"
        stroke="#10B981"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
