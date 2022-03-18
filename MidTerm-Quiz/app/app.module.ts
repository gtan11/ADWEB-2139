import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Emplist1Component } from './emplist1/emplist1.component';
import { Emplist2Component } from './emplist2/emplist2.component';
import { Emplist3Component } from './emplist3/emplist3.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmpServiceService } from './emp-service.service';

@NgModule({
  declarations: [
    AppComponent,
    Emplist1Component,
    Emplist2Component,
    Emplist3Component,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Tan, Geoferson Owen | WD-302