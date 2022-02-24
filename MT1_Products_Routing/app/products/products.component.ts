import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products = [
    {
      cardHead: "../assets/product-tshirt.jpg",
      id: "SHL0001",
      name: "Tshirt",
      description: "Comfortable, casual and loose fitting, our heavyweight dark color t-shirt will quickly become one of your favorites.",
      link: '../product-details'
    },
    {
      cardHead: "../assets/product-shoulderbag.jpg",
      id: "SHL0002",
      name: "Shoulder bag",
      description: "Unstructured fabric shoulder bag that can either be worn parallel to your body, or across it.",
      link: '../product-details'
    },
    {
      cardHead: "../assets/product-handbag.jpg",
      id: "SHL0003",
      name: "Handbags",
      description: "Made of 100% natural material and can be customized with your favorite pictures and text for the perfect gift or casual accessory.",
      link: '../product-details'
    },
    {
      cardHead: "../assets/product-joggingpants.jpg",
      id: "SHL0004",
      name: "Jogging Pants",
      description: "Made of fabric that allow for maximum comfort and ease.",
      link: '../product-details'
    },
    {
      cardHead: "../assets/product-faceshield.jpg",
      id: "SHL0005",
      name: "Faceshields",
      description: "New and improved face shields with comfortable glasses frames for adults and kids are here.",
      link: '../product-details'
    },
    {
      cardHead: "../assets/product-mug.jpg",
      id: "SHL0006",
      name: "Mugs",
      description: "Commuter mugs feature a rubber-lined lid for a tight, spill-resistant seal, twist the lid to reveal the sip opening",
      link: '../product-details'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
