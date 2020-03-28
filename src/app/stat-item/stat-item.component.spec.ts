import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatItemComponent } from './stat-item.component';

describe('StatComponent', () => {
  let component: StatItemComponent;
  let fixture: ComponentFixture<StatItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
