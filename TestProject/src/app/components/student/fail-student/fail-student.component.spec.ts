import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailStudentComponent } from './fail-student.component';

describe('FailStudentComponent', () => {
  let component: FailStudentComponent;
  let fixture: ComponentFixture<FailStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
