import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewObjectFormComponent } from './create-new-object-form.component';

describe('CreateNewObjectFormComponent', () => {
  let component: CreateNewObjectFormComponent;
  let fixture: ComponentFixture<CreateNewObjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewObjectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewObjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
