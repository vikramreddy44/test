import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show = false;
  showMenu = false;
  userName: any;
  constructor() {
  }

  ngOnInit() {
    this.userName = 'tejaswi';
  }

  toggleCollapseMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleCollapse() {
    this.show = !this.show;
  }

}
