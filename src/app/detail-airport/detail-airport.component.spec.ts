import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAirportComponent } from './detail-airport.component';

describe('DetailAirportComponent', () => {
  let component: DetailAirportComponent;
  let fixture: ComponentFixture<DetailAirportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAirportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
