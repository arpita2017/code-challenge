import { TestBed,async } from '@angular/core/testing';

import { AirportService } from './airport.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

describe('AirportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportService ],
      providers:[
        {provide:HttpClient , useclass :HttpClient}
      ]
    })
    .compileComponents().then(()=>{
    
    });
  }));


  it('should be created', () => {
    const service: AirportService = TestBed.get(AirportService);
    expect(service).toBeTruthy();
  });
});
