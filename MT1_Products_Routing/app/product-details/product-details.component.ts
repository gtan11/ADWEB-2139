import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  Products = [
    {
      cardHead: "../assets/product-tshirt.jpg",
      id: "SHL0001",
      name: "Tshirt",
      description: "Comfortable, casual and loose fitting, our heavyweight dark color t-shirt will quickly become one of your favorites.",
      link: ''
    },
    {
      cardHead: "../assets/product-shoulderbag.jpg",
      id: "SHL0002",
      name: "Shoulder bag",
      description: "Unstructured fabric shoulder bag that can either be worn parallel to your body, or across it.",
      link: ''
    },
    {
      cardHead: "../assets/product-handbag.jpg",
      id: "SHL0003",
      name: "Handbags",
      description: "Made of 100% natural material and can be customized with your favorite pictures and text for the perfect gift or casual accessory.",
      link: ''
    },
    {
      cardHead: "../assets/product-joggingpants.jpg",
      id: "SHL0004",
      name: "Jogging Pants",
      description: "Made of fabric that allow for maximum comfort and ease.",
      link: ''
    },
    {
      cardHead: "../assets/product-faceshield.jpg",
      id: "SHL0005",
      name: "Faceshields",
      description: "New and improved face shields with comfortable glasses frames for adults and kids are here.",
      link: ''
    },
    {
      cardHead: "../assets/product-mug.jpg",
      id: "SHL0006",
      name: "Mugs",
      description: "Commuter mugs feature a rubber-lined lid for a tight, spill-resistant seal, twist the lid to reveal the sip opening",
      link: ''
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
