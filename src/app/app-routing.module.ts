import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailAirportComponent } from './detail-airport/detail-airport.component';
import { ListAirportComponent } from './list-airport/list-airport.component';



const routes: Routes = [
  {path:'', redirectTo:'/list' ,pathMatch:'full'},
  {path:'detail',component:DetailAirportComponent},
  {path:'list',component:ListAirportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
