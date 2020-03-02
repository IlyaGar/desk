import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTasksFormComponent } from './my-tasks-form.component';

describe('MyTasksFormComponent', () => {
  let component: MyTasksFormComponent;
  let fixture: ComponentFixture<MyTasksFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTasksFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTasksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
