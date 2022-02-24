import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Step 3a - adding import lines
import { AboutComponent } from './about/about.component';
import { ListingComponent } from './listing/listing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';

// Step 3b - create and define the routes
const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'listing', component:ListingComponent},
  {path:'home', component:HomeComponent},
  {path:'test', component:TestComponent},
  {path:'', component:HomeComponent},
  {path:'**', component:PagenotfoundComponent} //Wildcard to match any
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Tan, Geoferson Owen | WD-302