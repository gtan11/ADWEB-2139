import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Binding Images
  banner:string = "../assets/S&R-safety.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
