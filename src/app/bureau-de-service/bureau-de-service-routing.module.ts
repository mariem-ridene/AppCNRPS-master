import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DossiersComponent } from './dossier/dossiers/dossiers.component';
import { DetailComponent } from './dossier/detail/detail.component';
import { SupportComponent } from './dossier/support/support.component';
import { CourrierBloqComponent } from '../courrier-bloq/courrier-bloq.component';

const routes: Routes = [
  { path: 'dash', component: DashComponent },
  { path: 'dossiers', component: DossiersComponent },
  { path: 'dossier/detail', component: DetailComponent},
  { path: 'dossier/support', component: SupportComponent},
  { path: 'courrier-bloque', component: CourrierBloqComponent},
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BureauDeServiceRoutingModule { }
