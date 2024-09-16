import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BureauDordreDashboardComponent } from './bureau-dordre-dashboard/bureau-dordre-dashboard.component';
import { DossiersAAffecterComponent } from './dossiers-a-affecter/dossiers-a-affecter.component';
import { DossiersAffecteeComponent } from './dossiers-affectee/dossiers-affectee.component';

const routes: Routes = [
  {
    path: 'bureau-dordre-dashboard',
    component: BureauDordreDashboardComponent,
  },
  {
    path: 'dossiers-a-affecter',
    component: DossiersAAffecterComponent,
  },
  {
    path: 'dossiers-affectee',
    component: DossiersAffecteeComponent,
  },
  
  { path: '', redirectTo: 'bureau-dordre-dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BureauDordreRoutingModule {}
