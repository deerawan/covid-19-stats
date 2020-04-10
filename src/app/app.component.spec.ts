import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoronaService } from './corona.service';
import { ModeToggleComponent } from './mode-toggle/mode-toggle.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { StatItemComponent } from './stat-item/stat-item.component';
import { of } from 'rxjs';
import { StatTitleComponent } from './stat-title/stat-title.component';
import { global } from '@angular/compiler/src/util';

describe('AppComponent', () => {
  let coronaServiceMock;

  beforeEach(async(() => {
    coronaServiceMock = {
      getGlobalStat: jest.fn().mockReturnValue(
        of({
          cases: 10,
          deaths: 20,
          recovered: 30,
          updated: 40,
          active: 50
        })
      ),
      getCountriesStat: jest.fn().mockReturnValue(
        of([
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
        ])
      )
    };

    global.chrome = { storage: { sync: { get: () => '' } } };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgSelectModule],
      declarations: [
        AppComponent,
        ModeToggleComponent,
        StatItemComponent,
        StatTitleComponent
      ],
      providers: [
        {
          provide: CoronaService,
          useValue: coronaServiceMock
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const element = fixture.nativeElement;
    expect(element.querySelector('.header__title').textContent).toEqual(
      'Corona Stats'
    );
  });

  it('should have country select', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement;
    expect(element.querySelector('#country')).toBeTruthy();
  });
});
