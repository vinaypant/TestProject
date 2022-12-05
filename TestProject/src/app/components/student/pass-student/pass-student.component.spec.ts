import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassStudentComponent } from './pass-student.component';

describe('PassStudentComponent', () => {
  let component: PassStudentComponent;
  let fixture: ComponentFixture<PassStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
