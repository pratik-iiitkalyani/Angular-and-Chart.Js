import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartWithScrollableYAxisComponent } from './line-chart-with-scrollable-y-axis.component';

describe('LineChartWithScrollableYAxisComponent', () => {
  let component: LineChartWithScrollableYAxisComponent;
  let fixture: ComponentFixture<LineChartWithScrollableYAxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartWithScrollableYAxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartWithScrollableYAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
