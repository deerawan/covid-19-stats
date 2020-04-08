export interface GlobalStat {
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  updated: number;
}

export interface CountryStat extends GlobalStat {
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
}
