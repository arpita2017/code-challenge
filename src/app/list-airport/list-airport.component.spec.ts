import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAirportComponent } from './list-airport.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListAirportComponent', () => {
  let component: ListAirportComponent;
  let fixture: ComponentFixture<ListAirportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAirportComponent ],
      providers:[
        {provide:AirportService , useclass :AirportServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });
  
  


  
  

});
