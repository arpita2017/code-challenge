export class Location1 {
    public aboveSeaLevel : String;
    public latitude : number;
    public latitudeRadius : number;
    public longitude : number;
    public longitudeRadius : number;
    public latitudeDirection : String;
    public longitudeDirection : String;

    constructor(aboveSeaLevel : String,latitude : number){
      this.aboveSeaLevel= aboveSeaLevel;
      this.latitude =   latitude;

    }

}