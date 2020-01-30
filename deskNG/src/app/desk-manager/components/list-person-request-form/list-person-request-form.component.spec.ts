import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonRequestFormComponent } from './list-person-request-form.component';

describe('ListPersonRequestFormComponent', () => {
  let component: ListPersonRequestFormComponent;
  let fixture: ComponentFixture<ListPersonRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPersonRequestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
