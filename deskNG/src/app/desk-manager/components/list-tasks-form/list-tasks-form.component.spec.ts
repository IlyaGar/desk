import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTasksFormComponent } from './list-tasks-form.component';

describe('ListTasksFormComponent', () => {
  let component: ListTasksFormComponent;
  let fixture: ComponentFixture<ListTasksFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTasksFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTasksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
