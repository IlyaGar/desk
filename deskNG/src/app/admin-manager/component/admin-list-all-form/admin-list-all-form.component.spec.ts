import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListAllFormComponent } from './admin-list-all-form.component';

describe('AdminListAllFormComponent', () => {
  let component: AdminListAllFormComponent;
  let fixture: ComponentFixture<AdminListAllFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListAllFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListAllFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
