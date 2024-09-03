import { NgModule } from '@angular/core';

import { BureauDaccueilRoutingModule } from './bureau-daccueil-routing.module';
import { DemandeComponent } from './demande/demande.component';

import { DashbordComponent } from './dashbord/dashbord.component';
import { CompleterDossierComponent } from './completer-dossier/completer-dossier.component';

import { NotifBRComponent } from './Notif/notif-br/notif-br.component';
import { NotifMPComponent } from './Notif/notif-mp/notif-mp.component';
import { CourierMPComponent } from './Notif/courier-mp/courier-mp.component';
import { RecuPapierComponent } from './Notif/recu-papier/recu-papier.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DemandeComponent, DashbordComponent, CompleterDossierComponent,
     NotifBRComponent, NotifMPComponent, CourierMPComponent,
       RecuPapierComponent, 
  ],
  imports: [
    CommonModule,
    BureauDaccueilRoutingModule,
    FormsModule 
  ]
})
export class BureauDaccueilModule { }
