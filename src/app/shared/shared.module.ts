import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { SidenavComponent } from './sidenav/sidenav.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    SidenavComponent,
    SublevelMenuComponent,
    BodyComponent,
    // other shared components
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule // Include MatIconModule here
  ],
  exports: [
    SidenavComponent,
    BodyComponent
    // other components that need to be used in other modules
  ]
})
export class SharedModule { }
