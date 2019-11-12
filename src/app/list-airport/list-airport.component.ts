import { Component, OnInit } from '@angular/core';
import { AirportService } from '../airport.service';
import { Airport } from '../model/airport';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-airport',
  templateUrl: './list-airport.component.html',
  styleUrls: ['./list-airport.component.css']
})
export class ListAirportComponent implements OnInit {

  airports = new Array<Airport>();


  constructor( airportService:AirportService, private router: Router ) {
    airportService.getAirports().subscribe(response => 
      {
        this.airports = response.map(item => 
        {

          return new Airport( 
              item.airportCode,
              item.internationalAirport,
              item.domesticAirport,
              item.regionalAirport,
              item.onlineIndicator,
              item.eticketableAirport,
              item.location,
              item.airportName,
              item.city,
              item.region,
              item.country
          );
        });
      });

  }

  displayDetail(timeZoneName,aboveSeaLevel){
  
    
    this.router.navigate(['/detail/'], {
        queryParams: {  timeZoneName:  timeZoneName , aboveSeaLevel:aboveSeaLevel}
       });


}

ngOnInit(){}



}
