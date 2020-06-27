import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartFilterComponent } from './bar-chart-filter.component';

describe('BarChartFilterComponent', () => {
  let component: BarChartFilterComponent;
  let fixture: ComponentFixture<BarChartFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
