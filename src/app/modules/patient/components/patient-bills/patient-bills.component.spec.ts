import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBillsComponent } from './patient-bills.component';

describe('PatientBillsComponent', () => {
  let component: PatientBillsComponent;
  let fixture: ComponentFixture<PatientBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
