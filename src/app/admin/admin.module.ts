import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin-dashboard/admin.component';

import { SousAdminComponent } from './SousAdmins/sous-admin/sous-admin.component';
import { AjouterSAComponent } from './SousAdmins/ajouter-sa/ajouter-sa.component';
import { ModifierSaComponent } from './SousAdmins/modifier-sa/modifier-sa.component';
import { EmployeesComponent } from './Employés/employees/employees.component';
import { ListeCongeComponent } from './espace-congé/liste-conge/liste-conge.component';
import { DetailsCongeComponent } from './espace-congé/details-conge/details-conge.component';
import { ModifierEmComponent } from './Employés/modifier-em/modifier-em.component';
import { AjouterEmComponent } from './Employés/ajouter-em/ajouter-em.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendrierComponent } from './espace-congé/calendrier/calendrier.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FullCalendarModule } from '@fullcalendar/angular';
import { AffectationStandardComponent } from './affectation-standard/affectation-standard.component';
import { SuiviDossierComponent } from './suivi-dossier/suivi-dossier.component';
import { ManageServicesComponent } from './manage-services/manage-services.component';
import { ManageDemandTypesComponent } from './manage-demand-types/manage-demand-types.component';

@NgModule({
  declarations: [
    AdminComponent,
    SousAdminComponent,
    AjouterSAComponent,
    ModifierSaComponent,
    EmployeesComponent,
    ListeCongeComponent,
    DetailsCongeComponent,
    ModifierEmComponent,
    AjouterEmComponent,
    CalendrierComponent,
    AffectationStandardComponent,
    SuiviDossierComponent,
    ManageServicesComponent,
    ManageDemandTypesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {}
