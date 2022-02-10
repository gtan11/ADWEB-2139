import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  //Two-way Data Binding
  Fname='';
  Lname='';
  email='';
  institution='';

  //Event Binding
  showData($event: any) {
    console.log("button is clicked!");
      if($event) {
        console.log($event.target);
        console.log($event.target.value);
      }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

/*
  Tan, Geoferson Owen
  WD-302
*/