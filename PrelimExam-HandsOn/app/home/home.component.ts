import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Binding Images
  imageUrl1:string = "../assets/seminar-presenter.jpg";

  //Event Binding
  showData($event: any) {
    console.log("button is clicked!");
      if($event) {
        console.log($event.target);
        console.log($event.target.value);
      }
  }

  //ngFor
  cardData = [
    { cardHead: '../assets/france.jpg',
      city: 'France',
      shortInfo: 'The largest country in Western Europe, has long been a gateway between the continent\'s northern and southern regions.', act1: 'Architecture and Fine Arts', act2: 'Cultural Events', act3: 'Safety and Security',
      link: 'https://www.britannica.com/place/France'
    },
    { cardHead: '../assets/seoul.jpg',
      city: 'Seoul',
      shortInfo: 'Korean Sŏul, formally Sŏul-t\'ŭkpyŏlsi (\“Special City of Seoul\”), city and capital of South Korea (the Republic of Korea).', act1: 'Humanities and Arts', act2: 'Cultural Events', act3: 'Safety and Security',
      link: 'https://www.britannica.com/place/Seoul'
    },
    { cardHead: '../assets/san-francisco.jpg',
      city: 'San Francisco',
      shortInfo: 'It is a cultural and financial centre of the western United States and one of the country\'s most cosmopolitan cities.', act1: 'Science and Technology', act2: 'Cultural Events', act3: 'Safety and Security',
      link: 'https://www.britannica.com/place/San-Francisco-California'
    },
    { cardHead: '../assets/boston.jpg',
      city: 'Boston',
      shortInfo: 'Best known for its famous baked beans, Fenway Park, The Boston Marathon, and of course for the bar for Cheers.', act1: 'Engineering and Tech', act2: 'Cultural Events', act3: 'Safety and Security',
      link: 'https://www.britannica.com/place/Boston'
    }
  ];
  


  constructor() { }

  ngOnInit(): void {
  }

}

/*
  Tan, Geoferson Owen
  WD-302
*/