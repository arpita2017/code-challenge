import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule }    from '@angular/common/http';
import  { AirportService} from './airport.service';
import { DetailAirportComponent } from './detail-airport/detail-airport.component';
import { ListAirportComponent } from './list-airport/list-airport.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailAirportComponent,
    ListAirportComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AirportService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
