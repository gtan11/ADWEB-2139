import { Component, OnInit } from '@angular/core';

//import the service
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emplist2',
  templateUrl: './emplist2.component.html',
  styleUrls: ['./emplist2.component.css']
})
export class Emplist2Component implements OnInit {

  employees: any;
  constructor(private myservice:EmpServiceService) { }

  ngOnInit(): void {
    this.employees = this.myservice.empData()
  }

}


// Tan, Geoferson Owen | WD-302