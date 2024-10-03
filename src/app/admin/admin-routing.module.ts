import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin-dashboard/admin.component';
import { SousAdminComponent } from './SousAdmins/sous-admin/sous-admin.component';
import { AjouterSAComponent } from './SousAdmins/ajouter-sa/ajouter-sa.component';
import { ModifierSaComponent } from './SousAdmins/modifier-sa/modifier-sa.component';
import { EmployeesComponent } from './Employés/employees/employees.component';
import { ListeCongeComponent } from './espace-congé/liste-conge/liste-conge.component';
import { DetailsCongeComponent } from './espace-congé/details-conge/details-conge.component';
import { AjouterEmComponent } from './Employés/ajouter-em/ajouter-em.component';
import { ModifierEmComponent } from './Employés/modifier-em/modifier-em.component';
import { CalendrierComponent } from './espace-congé/calendrier/calendrier.component';
import { AffectationStandardComponent } from './affectation-standard/affectation-standard.component';
import { SuiviDossierComponent } from './suivi-dossier/suivi-dossier.component';
import { ManageDemandTypesComponent } from './manage-demand-types/manage-demand-types.component';
import { ManageServicesComponent } from './manage-services/manage-services.component';

const routes: Routes = [
  { path: 'dashboard', component: AdminComponent },
  { path: 'sousAdmin', component: SousAdminComponent },
  { path: 'sousAdmin/ajouter', component: AjouterSAComponent },
  { path: 'sousAdmin/modifier', component: ModifierSaComponent },
  { path: 'liste-employes', component: EmployeesComponent },
  { path: 'liste-congés', component: ListeCongeComponent },
  { path: 'details-congés', component: DetailsCongeComponent },
  { path: 'calendrier', component: CalendrierComponent },
  { path: 'employé/ajouter', component: AjouterEmComponent },
  { path: 'employé/modifier', component: ModifierEmComponent },

  { path: 'affectation-standard', component: AffectationStandardComponent },
  {
    path: 'manage-demand-types',
    component: ManageDemandTypesComponent,
  },
  {
    path: 'manage-services',
    component: ManageServicesComponent,
  },
  { path: 'suivi-dossier', component: SuiviDossierComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
