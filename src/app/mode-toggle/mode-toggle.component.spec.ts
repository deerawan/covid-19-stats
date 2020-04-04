import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeToggleComponent } from './mode-toggle.component';

describe('ModeToggleComponent', () => {
  let component: ModeToggleComponent;
  let fixture: ComponentFixture<ModeToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModeToggleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain elements', () => {
    const element = fixture.debugElement.nativeElement;
    expect(element.querySelector('.checkbox')).toBeTruthy();
    expect(element.querySelector('.label')).toBeTruthy();
    expect(element.querySelector('.icon')).toBeTruthy();
  });
});
