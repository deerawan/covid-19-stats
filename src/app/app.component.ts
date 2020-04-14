import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CoronaService } from './corona.service';
import { Observable, Subject, of, combineLatest, BehaviorSubject } from 'rxjs';
import { shareReplay, switchMap, take } from 'rxjs/operators';
import { Theme } from './corona.model';
import { GlobalStat, CountryStat } from './api.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  mode: Theme;
  countryForm: FormGroup;
  stat$: Observable<GlobalStat | CountryStat>;
  globalStat$: Observable<GlobalStat>;
  countryStats$: Observable<CountryStat[]>;

  private storageTheme = new Subject<Theme>();
  storageTheme$ = this.storageTheme.asObservable();

  private storageCountry = new BehaviorSubject<string>(null);

  constructor(
    private coronaService: CoronaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.countryForm = this.formBuilder.group({
      country: ''
    });

    if (chrome && chrome.storage) {
      chrome.storage.sync.get(['theme', 'country'], ({ theme, country }) => {
        if (country) {
          this.storageCountry.next(country);
        }

        if (theme) {
          this.storageTheme.next(theme);
          if (theme === 'dark') {
            this.setDarkMode();
          }
        }
      });
    }

    this.globalStat$ = this.coronaService
      .getGlobalStat()
      .pipe(take(1), shareReplay(1));
    this.countryStats$ = this.coronaService
      .getCountriesStat()
      .pipe(take(1), shareReplay(1));

    this.stat$ = combineLatest([this.countryStats$, this.storageCountry]).pipe(
      take(1),
      switchMap(values => {
        const [countryStats, country] = values;

        if (country) {
          const statFound = countryStats.find(
            countryStat => countryStat.country === country
          );

          this.countryForm.get('country').patchValue(country);

          return of(statFound);
        }

        return this.globalStat$;
      })
    );
  }

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
    this.stat$ = event ? of(event) : this.globalStat$;
    chrome.storage.sync.set({ country: event.country });
  }
}
