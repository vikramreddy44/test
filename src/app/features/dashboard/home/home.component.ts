import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuItems;
  constructor() {
    this.menuItems = [
      {
        name: 'Field Rule',
        path: '/fieldrule/home',
        image: '/assets/images/image3.png',
      },

      {
        name: 'Rshiny',
        path: '/msgcodes/home',
        image: '/assets/images/image2.jpg',
      },
      {
        name: 'Field XML',
        path: '/fieldxml/home',
        image: '/assets/images/image2.jpg',
      },

      {
        name: 'Testing',
        path: '/msgcodes/home',
        image: '/assets/images/image2.jpg',
      },
      {
        name: 'Message Code',
        path: '/msgcodes/home',
        image: '/assets/images/images.jpg',
      },
    ];
  }

  ngOnInit() {
  }

}
