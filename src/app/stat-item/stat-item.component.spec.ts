import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatItemComponent } from './stat-item.component';

describe('StatComponent', () => {
  let component: StatItemComponent;
  let fixture: ComponentFixture<StatItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displays title', () => {
    component.title = 'whatever';
    fixture.detectChanges();

    const element: HTMLElement = fixture.debugElement.nativeElement;
    const titleElement = element.querySelector('.title');

    expect(titleElement.textContent).toEqual(component.title);
  });

  it('displays total', () => {
    component.total = 1000;
    fixture.detectChanges();

    const element: HTMLElement = fixture.debugElement.nativeElement;
    const numberElement = element.querySelector('.number');

    expect(Number(numberElement.textContent)).toEqual(component.total);
  });

  it('set color as css class', () => {
    component.color = 'warning';
    fixture.detectChanges();

    const element: HTMLElement = fixture.debugElement.nativeElement;
    const numberElement = element.querySelector('.number');

    expect(numberElement.getAttribute('class')).toContain(component.color);
  });
});
