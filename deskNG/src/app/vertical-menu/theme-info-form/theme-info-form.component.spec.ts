import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeInfoFormComponent } from './theme-info-form.component';

describe('ThemeInfoFormComponent', () => {
  let component: ThemeInfoFormComponent;
  let fixture: ComponentFixture<ThemeInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
