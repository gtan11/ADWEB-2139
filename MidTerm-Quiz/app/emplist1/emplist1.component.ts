import { Component, OnInit } from '@angular/core';

//import the service
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emplist1',
  templateUrl: './emplist1.component.html',
  styleUrls: ['./emplist1.component.css']
})
export class Emplist1Component implements OnInit {

  employees: any;
  constructor(private myservice:EmpServiceService) { }

  ngOnInit(): void {
    this.employees = this.myservice.empData()
  }

}

// Tan, Geoferson Owen | WD-302