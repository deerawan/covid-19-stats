import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatTitleComponent } from './stat-title.component';

describe('StatTitleComponent', () => {
  let component: StatTitleComponent;
  let fixture: ComponentFixture<StatTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatTitleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
