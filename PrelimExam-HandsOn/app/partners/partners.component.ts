import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  //list for the ngFor Directives 
  partners = [
    { companyName: 'Microsoft',
      logo: '../assets/Microsoft-logo.png',
      sponsorType: 'Platinum',
      websiteLink: 'https://www.microsoft.com/'
    },
    { companyName: 'Apple',
      logo: '../assets/Apple-logo.png',
      sponsorType: 'Gold',
      websiteLink: 'https://www.apple.com/'
    },
    { companyName: 'Amazon',
      logo: '../assets/Amazon-logo.png',
      sponsorType: 'Silver',
      websiteLink: 'https://www.amazon.com/'
    },
    { companyName: 'Google, Inc.',
      logo: '../assets/Google-logo.png',
      sponsorType: 'Bronze',
      websiteLink: 'https://www.google.com/'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

/*
  Tan, Geoferson Owen
  WD-302
*/