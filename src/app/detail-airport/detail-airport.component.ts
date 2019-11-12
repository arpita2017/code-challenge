import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detail-airport',
  templateUrl: './detail-airport.component.html',
  styleUrls: ['./detail-airport.component.css']
})
export class DetailAirportComponent implements OnInit {
  timeZoneName: string;
  aboveSeaLevel : string


  state$: Observable<object>;
 
  constructor(private route: ActivatedRoute,private router: Router) {
  
    this.timeZoneName = this.route.snapshot.queryParamMap.get('timeZoneName');
    this.aboveSeaLevel = this.route.snapshot.queryParamMap.get('aboveSeaLevel');
  
  }

  gotoList(){
    
     this.router.navigateByUrl('/list');
  
 
 }

  ngOnInit() {
    
      
  }


  

}
