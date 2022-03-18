import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import the routes
import { AppComponent } from './app.component';
import { Emplist1Component } from './emplist1/emplist1.component';
import { Emplist2Component } from './emplist2/emplist2.component';
import { Emplist3Component } from './emplist3/emplist3.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


//Define the routes
const routes: Routes = [
  {path: 'emplist1', component:Emplist1Component},
  {path: 'emplist2', component:Emplist2Component},
  {path: 'emplist3', component:Emplist3Component},
  {path: '', component:Emplist1Component},
  {path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Tan, Geoferson Owen | WD-302