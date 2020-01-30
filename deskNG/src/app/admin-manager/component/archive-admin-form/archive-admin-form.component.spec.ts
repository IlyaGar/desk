import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveAdminFormComponent } from './archive-admin-form.component';

describe('ArchiveAdminFormComponent', () => {
  let component: ArchiveAdminFormComponent;
  let fixture: ComponentFixture<ArchiveAdminFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveAdminFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
