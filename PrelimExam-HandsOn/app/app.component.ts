import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prelim-exam';

    //Style Binding
    footerCSSClass = "black";
    notapliedfooterCSSClass = false;
    footerColor = "white";
}
