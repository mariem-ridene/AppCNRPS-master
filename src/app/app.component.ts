import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        if (url.startsWith('/admin')) {
          this.menuService.setSide('admin');
        } else if (url.startsWith('/bureau-dordre')) {
          this.menuService.setSide('bureauDordre');
        } else if (url.startsWith('/bureau-daccueil')) {
          this.menuService.setSide('bureauDaccueil');
        } else if (url.startsWith('/bureau-de-service')) {
          this.menuService.setSide('bureauDeService');
        }
      }
    });
  }

  onToggleSideNav(data: { screenWidth: number; collapsing: boolean }): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsing;
  }
}