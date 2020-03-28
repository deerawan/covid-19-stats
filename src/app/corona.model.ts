export interface Stat {
  title: string;
  total: number;
  color: StatType;
}

export type StatType = 'success' | 'warning' | 'danger';
