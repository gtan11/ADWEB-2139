import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//additional imports for routing
import { RaisedbuttonComponent } from './raisedbutton/raisedbutton.component';
import { BasicbuttonComponent } from './basicbutton/basicbutton.component';
import { InputsettingsComponent } from './inputsettings/inputsettings.component';
import { CheckboxsetupComponent } from './checkboxsetup/checkboxsetup.component';

const routes: Routes = [
  {path: 'raised-button', component:RaisedbuttonComponent},
  {path: 'basic-button', component:BasicbuttonComponent},
  {path: 'input-settings', component:InputsettingsComponent},
  {path: 'checkbox-setup', component:CheckboxsetupComponent},
  {path: '', component:RaisedbuttonComponent},
  //{path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
