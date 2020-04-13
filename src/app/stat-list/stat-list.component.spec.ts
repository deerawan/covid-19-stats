import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatListComponent } from './stat-list.component';
import { StatItemComponent } from '../stat-item/stat-item.component';
import { StatTitleComponent } from '../stat-title/stat-title.component';

describe('StatListComponent', () => {
  let component: StatListComponent;
  let fixture: ComponentFixture<StatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatListComponent, StatItemComponent, StatTitleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
