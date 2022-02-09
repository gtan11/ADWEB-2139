import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bind',
  templateUrl: './test-bind.component.html',
  styleUrls: ['./test-bind.component.css']
})
export class TestBindComponent implements OnInit {

  //Image Binding
  imageUrl:string="../assets/HAU-logo.png";
  
  //Two-way Data Binding
  studName="";
  subject="";
  prelim=0;
  midterm=0;
  final=0;
  subject1="";
  prelim1=0;
  midterm1=0;
  final1=0;

  //Style Binding
  appliedCSSClass = "black";
  notappliedCSSClass = false;
  myColor = 'red';

  footerCSSClass = "grey";
  notapliedfooterCSSClass = false;
  footerColor = "white";

  //Event Binding
  getData(data: any) {
    console.warn(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
