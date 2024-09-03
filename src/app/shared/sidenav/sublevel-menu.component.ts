import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <ul class="sublevel-nav" *ngIf="expanded">
      <li class="sublevel-nav-item" *ngFor="let item of data.items || []">
        <a
          class="sublevel-nav-link"
          [routerLink]="[item.routeLink]"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <i class="sidenav-link-icon" [class]="item.icon"></i>
          <span *ngIf="collapsed">{{ item.label }}</span>
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./sidenav.component.css'],
})
export class SublevelMenuComponent implements OnInit {
  @Input() data: { items?: MenuItem[] } = {}; // Make items optional
  @Input() collapsed: boolean = false;
  @Input() multiple: boolean = false;
  @Input() expanded: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
