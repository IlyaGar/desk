import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListNewTasksFormComponent } from './admin-list-new-tasks-form.component';

describe('AdminListNewTasksFormComponent', () => {
  let component: AdminListNewTasksFormComponent;
  let fixture: ComponentFixture<AdminListNewTasksFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListNewTasksFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListNewTasksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
