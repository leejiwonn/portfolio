const Color = {
  DEPTH_D: '#212121',
  DEPTH_L: '#FCFAF2',
  POINT_O: '#FFBB69',
  POINT_B: '#DBAE8F',
} as const;

type Color = typeof Color[keyof typeof Color];

export { Color };
