import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcastHourly } from './forcast-hourly';

describe('ForcastHourly', () => {
  let component: ForcastHourly;
  let fixture: ComponentFixture<ForcastHourly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForcastHourly]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForcastHourly);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
