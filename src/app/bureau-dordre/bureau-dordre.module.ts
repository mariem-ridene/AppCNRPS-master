import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BureauDordreRoutingModule } from './bureau-dordre-routing.module';
import { BureauDordreDashboardComponent } from './bureau-dordre-dashboard/bureau-dordre-dashboard.component';
import { DossiersAAffecterComponent } from './dossiers-a-affecter/dossiers-a-affecter.component';
import { DossiersAffecteeComponent } from './dossiers-affectee/dossiers-affectee.component';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';
import { SuiviCongesComponent } from './suivi-conges/suivi-conges.component';



@NgModule({
  declarations: [
    BureauDordreDashboardComponent,
    DossiersAAffecterComponent,
    DossiersAffecteeComponent,
    DemandeCongeComponent,
    SuiviCongesComponent
  ],
  imports: [
    CommonModule,
    BureauDordreRoutingModule,
    SharedModule
  ]
})
export class BureauDordreModule { }
