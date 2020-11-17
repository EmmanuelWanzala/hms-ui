import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedRecordsComponent } from './patient-med-records.component';

describe('PatientMedRecordsComponent', () => {
  let component: PatientMedRecordsComponent;
  let fixture: ComponentFixture<PatientMedRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMedRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMedRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
