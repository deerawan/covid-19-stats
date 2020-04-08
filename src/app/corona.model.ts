export interface Stat {
  title: string;
  total: number;
  color: StatType;
}

export interface StatTitle {
  text: string;
  imgUrl?: string;
}

export type StatType = 'success' | 'warning' | 'danger' | 'regular';

export type Theme = 'light' | 'dark';