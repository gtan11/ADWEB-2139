import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaisedbuttonComponent } from './raisedbutton/raisedbutton.component';
import { BasicbuttonComponent } from './basicbutton/basicbutton.component';
import { CheckboxsetupComponent } from './checkboxsetup/checkboxsetup.component';
import { InputsettingsComponent } from './inputsettings/inputsettings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Materials
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    RaisedbuttonComponent,
    BasicbuttonComponent,
    CheckboxsetupComponent,
    InputsettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Tan, Geoferson Owen | WD-302