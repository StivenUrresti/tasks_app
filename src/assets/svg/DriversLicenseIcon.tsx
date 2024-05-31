import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const DriversLicenseIcon = ({
  width = 24,
  height = 24,
  color = '#000',
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 2048 1536">
      <Path
        fill={color}
        d="M896 1084q0 55-31.5 93.5T789 1216H363q-44 0-75.5-38.5T256 1084q0-54 7.5-100.5t24.5-90t51-68.5t81-25q64 64 156 64t156-64q47 0 81 25t51 68.5t24.5 90T896 1084M768 640q0 80-56 136t-136 56t-136-56t-56-136t56-136t136-56t136 56t56 136m1024 416v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704q14 0 23 9t9 23m-384-256v64q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h320q14 0 23 9t9 23m384 0v64q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h192q14 0 23 9t9 23m0-256v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704q14 0 23 9t9 23m128 832V256H128v1120q0 13 9.5 22.5t22.5 9.5h1728q13 0 22.5-9.5t9.5-22.5m128-1216v1216q0 66-47 113t-113 47H160q-66 0-113-47T0 1376V160Q0 94 47 47T160 0h1728q66 0 113 47t47 113"
      />
    </Svg>
  );
};
