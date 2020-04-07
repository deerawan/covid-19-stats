import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
  ChangeDetectorRef,
  NgZone
} from '@angular/core';
import { CoronaService } from './corona.service';
import { Observable, Subject, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Stat, Theme } from './corona.model';
import { GlobalStat, CountryStat } from './api.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  lastUpdated$: Observable<number>;
  countryNames$: Observable<CountryStat[]>;
  stats$: Observable<Stat[]>;
  mode: Theme;

  private globalApiResponse$: Observable<GlobalStat>;

  private storageTheme = new Subject<Theme>();
  storageTheme$ = this.storageTheme.asObservable();

  constructor(private coronaService: CoronaService) {}

  ngOnInit(): void {
    if (chrome && chrome.storage) {
      chrome.storage.sync.get('theme', ({ theme }) => {
        this.storageTheme.next(theme);
        if (theme === 'dark') {
          this.setDarkMode();
        }
      });
    }

    this.globalApiResponse$ = this.coronaService
      .getGlobalStat()
      .pipe(shareReplay(1));

    this.stats$ = this.globalApiResponse$.pipe(
      map((response: GlobalStat) => this.buildStat(response))
    );

    this.countryNames$ = this.coronaService.getCountriesStat();

    this.lastUpdated$ = this.globalApiResponse$.pipe(
      map(response => response.updated)
    );
  }

  ngAfterViewInit() {}

  setLightMode() {
    if (chrome && chrome.storage) {
      chrome.storage.sync.set({ theme: 'light' });
    }
    document.body.classList.remove('theme-dark');
  }

  setDarkMode() {
    if (chrome && chrome.storage) {
      chrome.storage.sync.set({ theme: 'dark' });
    }
    document.body.classList.add('theme-dark');
  }

  onCountryChange(event: CountryStat) {
    this.stats$ = of(this.buildStat(event));
  }

  private buildStat(response: {
    active: number;
    recovered: number;
    deaths: number;
  }): Stat[] {
    return [
      {
        title: 'Confirmed',
        total: response.active,
        color: 'warning'
      },
      {
        title: 'Recovered',
        total: response.recovered,
        color: 'success'
      },
      {
        title: 'Deaths',
        total: response.deaths,
        color: 'danger'
      }
    ];
  }
}
