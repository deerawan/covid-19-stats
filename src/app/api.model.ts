export interface GlobalResponse {
  cases: number;
  deaths: number;
  recovered: number;
  updated: number;
  active: number;
}

export interface CountriesResponse {
  country: string;
  countryInfo: {
    _id: string;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: 565;
  deaths: 6098;
  todayDeaths: 28;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  updated: number;
}
