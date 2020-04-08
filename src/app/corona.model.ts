export interface Stat {
  title: string;
  total: number;
  color: StatType;
}

export type StatType = 'success' | 'warning' | 'danger' | 'regular';

export type Theme = 'light' | 'dark';
