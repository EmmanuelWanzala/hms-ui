import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsCasesComponent } from './doctors-cases.component';

describe('DoctorsCasesComponent', () => {
  let component: DoctorsCasesComponent;
  let fixture: ComponentFixture<DoctorsCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
