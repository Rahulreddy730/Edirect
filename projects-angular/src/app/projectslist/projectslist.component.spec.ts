import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectslistComponent } from './projectslist.component';

describe('ProjectslistComponent', () => {
  let component: ProjectslistComponent;
  let fixture: ComponentFixture<ProjectslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
