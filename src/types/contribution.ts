type WeekColor = {
  color: string;
  contributionCount: number;
  date: string;
  weekday: number;
};

export type Contribution = {
  total: number;
  week: WeekColor[];
};
