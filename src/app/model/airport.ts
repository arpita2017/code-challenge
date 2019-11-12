
import {City} from  './city';
import {Region} from  './region';
import { Country } from './country';

export class Airport {  
 
    public airportCode: string;
    public internationalAirport: boolean;
    public domesticAirport: boolean;
    public regionalAirport: boolean;
    public onlineIndicator: boolean;
    public eticketableAirport :boolean;
    public location: Location;
    public city : City;
    public airportName : String;
    public region: Region;
    public country :Country;
    
    

   constructor(airportCode: string, internationalAirport: boolean, domesticAirport: boolean,
    regionalAirport: boolean,onlineIndicator: boolean, eticketableAirport :boolean,
    location: Location, airportName : String, city : City, region: Region, country :Country) {
    this.airportCode = airportCode;
    this.internationalAirport = internationalAirport;
    this.domesticAirport = domesticAirport;
    this.regionalAirport = regionalAirport;
    this.onlineIndicator = onlineIndicator;
    this.eticketableAirport = eticketableAirport;
    this.location=location;
    this.airportName = airportName;
    this.city=city;
    this.region=region;
    this.country=country;
  }
    
     
  }