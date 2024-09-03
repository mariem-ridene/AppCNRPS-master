import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  isSubMenuOpen = false;

  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }
  
  isFullscreen: boolean = false;

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
