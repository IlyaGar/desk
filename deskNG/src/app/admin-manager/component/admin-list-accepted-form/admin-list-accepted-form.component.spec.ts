import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListAcceptedFormComponent } from './admin-list-accepted-form.component';

describe('AdminListAcceptedFormComponent', () => {
  let component: AdminListAcceptedFormComponent;
  let fixture: ComponentFixture<AdminListAcceptedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListAcceptedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListAcceptedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
