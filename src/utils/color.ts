const Color = {
  DEPTH_D: '#404B50',
  DEPTH_L: '#FEFEFE',
  POINT_O: '#FFB340',
  POINT_B: '#CEE9F7',
} as const;

type Color = typeof Color[keyof typeof Color];

export { Color };
