import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airport } from './model/airport';




@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor( private http: HttpClient ) { }

  public getAirports(): Observable<Airport[]> 
  {
    const url = 'https://api.qantas.com/flight/refData/airport';
 
    return this.http.get<Airport[]>(url);
  }

}
