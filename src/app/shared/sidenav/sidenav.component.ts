import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { fadeInOut, MenuService } from 'src/app/services/menu.service';
import { MenuItem } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('350ms', keyframes([
          style({ transform: 'rotate(0deg)', offset: 0 }),
          style({ transform: 'rotate(1turn)', offset: 1 }),
        ])),
      ]),
    ]),
  ],
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<{ screenWidth: number; collapsing: boolean }> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData: MenuItem[] = [];
  multiple = false;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.menuService.getMenuItems().subscribe(items => {
      this.navData = items || []; // Safeguard against null or undefined items
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsing: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsing: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsing: this.collapsed, screenWidth: this.screenWidth });
  }

  handleClick(item: MenuItem): void {
    if (!this.multiple) {
      this.navData.forEach(modelItem => {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      });
    }
  
    if (item.items) {  // Ensure items is defined before accessing it
      item.expanded = !item.expanded;
    }
  }


  isFullscreen: boolean = false;

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
}
