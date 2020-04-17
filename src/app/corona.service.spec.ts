import { CoronaService } from './corona.service';
import { of } from 'rxjs';

describe('CoronaService', () => {
  let service: CoronaService;
  let httpClientMock;

  const expectedBaseUrl = 'https://corona.lmao.ninja/v2';

  beforeEach(() => {
    httpClientMock = {
      get: jest.fn()
    };

    service = new CoronaService(httpClientMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getGlobalStat', () => {
    it('calls global endpoint', done => {
      const expectedResponse = {
        cases: 10,
        deaths: 20,
        recovered: 30,
        updated: 40,
        active: 50
      };

      httpClientMock.get.mockReturnValue(of(expectedResponse));

      service.getGlobalStat().subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(httpClientMock.get).toHaveBeenCalledWith(
          `${expectedBaseUrl}/all`
        );
        done();
      });
    });
  });

  describe('#getCountriesStat', () => {
    it('calls countries endpoint', done => {
      const expectedResponse = [
        {
          country: 'USA',
          countryInfo: {
            _id: 840,
            iso2: 'US',
            iso3: 'USA',
            lat: 38,
            long: -97,
            flag:
              'https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/us.png'
          },
          cases: 245442,
          todayCases: 565,
          deaths: 6098,
          todayDeaths: 28,
          recovered: 10411,
          active: 228933,
          critical: 5421,
          casesPerOneMillion: 742,
          deathsPerOneMillion: 18,
          updated: 1585914647331
        }
      ];

      httpClientMock.get.mockReturnValue(of(expectedResponse));

      service.getCountriesStat().subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(httpClientMock.get).toHaveBeenCalledWith(
          `${expectedBaseUrl}/countries`
        );
        done();
      });
    });
  });
});
