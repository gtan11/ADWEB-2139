import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {
  
  //Interpolation
  appName = "Lab 4 | Data Binding Techniques";

  //Property Binding - String and Number
  clientName:string = "Owen T.";
  clientNumber:number = 123;

  //Style Binding
  appliedCSSClass = "green";
  notappliedCSSClass = false;
  myColor = 'red';

  //Property Binding - Binding Images
  imageUrl: string = "../assets/quote.jpg";
  
  //Class Binding
  appliedClassCSS = "green";
  notappliedClassCSS = false;

  //Event Binding
  showData($event: any) {
    console.log("button is clicked!");
      if($event) {
        console.log($event.target);
        console.log($event.target.value);
      }
  }
  
  //Event Binding using console.warn()
  getData(data: any) {
    console.warn(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

//Tan, Geoferson Owen | WD-302