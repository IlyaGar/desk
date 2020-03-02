import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalMenuFormComponent } from './vertical-menu-form.component';

describe('VerticalMenuFormComponent', () => {
  let component: VerticalMenuFormComponent;
  let fixture: ComponentFixture<VerticalMenuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalMenuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalMenuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
