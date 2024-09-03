import { NgModule } from '@angular/core';
import { DossiersComponent } from './dossier/dossiers/dossiers.component';
import { DetailComponent } from './dossier/detail/detail.component';
import { SupportComponent } from './dossier/support/support.component';
import { DashComponent } from './dash/dash.component';
import { CommonModule } from '@angular/common';
import { BureauDeServiceRoutingModule } from './bureau-de-service-routing.module';



@NgModule({
  declarations: [
    DashComponent, DossiersComponent, DetailComponent, SupportComponent
  ],
  imports: [
    CommonModule,
    BureauDeServiceRoutingModule,
  ]
})
export class BureauDeServiceModule { }
