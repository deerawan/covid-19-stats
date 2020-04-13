export interface Stat {
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  tests: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  updated: number;
}
export type GlobalStat = Stat;

export interface CountryStat extends Stat {
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
}
