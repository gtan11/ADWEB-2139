import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkboxsetup',
  templateUrl: './checkboxsetup.component.html',
  styleUrls: ['./checkboxsetup.component.css']
})
export class CheckboxsetupComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
   
  constructor() { }

  ngOnInit(): void {
  }

}

/*
  Tan, Geoferson Owen
  WD-302
*/
