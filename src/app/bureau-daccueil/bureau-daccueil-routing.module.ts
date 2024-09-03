import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeComponent } from './demande/demande.component';

import { DashbordComponent } from './dashbord/dashbord.component';
import { CompleterDossierComponent } from './completer-dossier/completer-dossier.component';

import { NotifBRComponent } from './Notif/notif-br/notif-br.component';

import { NotifMPComponent } from './Notif/notif-mp/notif-mp.component';
import { CourierMPComponent } from './Notif/courier-mp/courier-mp.component';
import { RecuPapierComponent } from './Notif/recu-papier/recu-papier.component';



const routes: Routes = [
  { path: 'demande', component: DemandeComponent},
  
  { path: 'dashbord', component: DashbordComponent},
  { path: 'completerDossier', component: CompleterDossierComponent},
  
  { path: 'notif-br', component: NotifBRComponent},
  { path: 'notif-mp', component: NotifMPComponent},
  { path: 'courrier-mp', component: CourierMPComponent},
  { path: 'recu-papier', component: RecuPapierComponent},
 
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BureauDaccueilRoutingModule { }
